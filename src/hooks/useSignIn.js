import { useEffect, useState } from "react";
import {
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { get, ref, set } from "firebase/database";
import axios from "axios";
import { getCount, getAcceptedCount } from "./useCount";

const clientId = process.env.REACT_APP_CLIENTID;
const clientSecret = process.env.REACT_APP_CLIENTSECRET;

export const useSignIn = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [logined, setLogined] = useState(false);
  const [userIn, setUserIn] = useState(null);
  const [users, setUsers] = useState([]);
  const provider = new GithubAuthProvider();
  provider.addScope("user");

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const baseUrl = "https://api.github.com";

  const login = async () => {
    setError(null);
    setIsPending(true);
    setLogined(false);

    try {
      const res = await signInWithPopup(auth, provider);
      if (!res) throw new Error("Could not complete signin");

      const user = res.user;
      const credential = GithubAuthProvider.credentialFromResult(res);
      const response = await axios({
        method: "post",
        url: `${baseUrl}/applications/${clientId}/token`,
        auth: {
          username: clientId,
          password: clientSecret,
        },
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        data: {
          access_token: credential.accessToken,
        },
      });

      const username = response.data.user.login;
      const userRef = ref(db, `/usernames/${username}`);
      const snapshot = await get(userRef);

      const userData = {
        username: username,
        Name: user.displayName || username,
        HacktoberFestContributions: await getCount(username),
        AcceptedHacktoberFestPRs: await getAcceptedCount(username),
        updatedAt: new Intl.DateTimeFormat("en-US", options).format(Date.now()),
      };

      if (snapshot.exists()) {
        await set(userRef, userData); // Update user
      } else {
        await set(userRef, userData); // Create new user
      }

      // After updating the database, call refreshData to update the UI
      await refreshData();

      setIsPending(false);
      setLogined(true);
      setUserIn(user);
    } catch (e) {
      setError(e.message);
      console.error(e);
      setIsPending(false);
    }
  };

  const refreshData = async () => {
    try {
      const usersRef = ref(db, "/usernames");
      const usersSnapshot = await get(usersRef);

      if (usersSnapshot.exists()) {
        const usersData = usersSnapshot.val();
        let usersArray = [];

        usersArray = await Promise.all(
          Object.keys(usersData).map(async (key) => {
            const userData = usersData[key];
            return {
              username: key, // 'key' is the username
              HacktoberFestContributions: userData.HacktoberFestContributions,
              AcceptedHacktoberFestPRs: userData.AcceptedHacktoberFestPRs,
              updatedAt: userData.updatedAt,
            };
          })
        );
        setUsers(usersArray); // Update the state
        return "Fetched usersArray";
      }
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  };

  // Check for user authentication state on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserIn(user);
        setLogined(true);
        const username = user.displayName; // Or however you determine the username
        const userRef = ref(db, `/usernames/${username}`);
        const snapshot = await get(userRef);

        if (snapshot.exists()) {
          const userData = snapshot.val();
          setUsers((prevUsers) => [
            ...prevUsers,
            {
              username: username,
              HacktoberFestContributions: userData.HacktoberFestContributions,
              AcceptedHacktoberFestPRs: userData.AcceptedHacktoberFestPRs,
              updatedAt: userData.updatedAt,
            },
          ]);
        } else {
          // Handle case where user data does not exist
          console.log("User data does not exist in the database.");
        }
      } else {
        setUserIn(null);
        setLogined(false);
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  return { login, error, isPending, logined, userIn, users, refreshData };
};
