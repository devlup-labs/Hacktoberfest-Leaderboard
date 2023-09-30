import { useState } from 'react'
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, db } from '../firebase'
import { get, push, ref, set } from 'firebase/database'
import axios from 'axios'
import {getCount, getAcceptedCount}   from './useCount'
import { Await } from 'react-router-dom'

const clientId = "Iv1.cfe8b01f5f80759b"
const clientSecret = "006c02e5c010337fcd7dace6c4ad52834b45f778"


export const useSignIn = () => {
    const [error, setError] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const [logined, setLogined] = useState(false)
    const [userIn, setUserIn] = useState(null)
    const [username, setUsername] = useState("")
    const [users, setUsers] = useState([])
    const provider = new GithubAuthProvider()
    provider.addScope('user')
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }
    const baseUrl = "https://api.github.com"
    const login = async () => {
        setError(null)
        setIsPending(true)
        setLogined(false)
        try {
            const res = await signInWithPopup(auth, provider)
            if (!res) {
                throw new Error("Could not complete signin")
            }
            const user = res.user
            const credential = GithubAuthProvider.credentialFromResult(res)
            console.log(credential.accessToken)
            axios({
                method: 'post',
                url: `${baseUrl}/applications/${clientId}/token`,
                auth: {
                    username: clientId,
                    password: clientSecret,
                },
                headers: {
                    Accept: 'application/vnd.github+json',
                    'X-GitHub-Api-Version': '2022-11-28',
                },
                data: {
                    access_token: credential.accessToken,
                },
            })
                .then(async (response) => {
                    console.log('Access Token Info:', response.data)
                    const username = response.data.user.login
                    setUsername(username)
                    console.log(username)
                    const userRef = ref(db, `/usernames/${username}`)

                    // Check if the user already exists in the database
                    const snapshot = await get(userRef)

                    if (snapshot.exists()) {
                        console.log('User already exists in the database')

                        // If the user exists, update the "updatedAt" timestamp
                        const updatedUserData = {
                            username: username,
                            Name: user.displayName,
                            HacktoberFestContributions: await getCount(username),
                            AcceptedHacktoberFestPRs: await getAcceptedCount(username),
                            updatedAt: new Intl.DateTimeFormat('en-US', options).format(Date.now()),
                        }

                        set(userRef, updatedUserData) // Update the user data in the database

                        console.log('User data updated in the database')
                        console.log('User data:', updatedUserData); 

                    } else {
                        // If the user doesn't exist, create a new user object
                        const newUser = {
                            username: username,
                            Name: user.displayName,
                            HacktoberFestContributions: await getCount(username),
                            AcceptedHacktoberFestPRs: await getAcceptedCount(username),
                            updatedAt: new Intl.DateTimeFormat('en-US', options).format(Date.now()),
                        }
                        console.log("the count in new User is",newUser.HacktoberFestContributions);
                        console.log("the count in new User is",newUser.AcceptedHacktoberFestPRs);

                        // Push the new user object to the database
                        push(userRef, newUser)
                            .then(() => {
                                console.log('User added to the database')
                            })
                            .catch((error) => {
                                console.error('Error adding user to the database:', error)
                            })
                    }
                })
                .catch((error) => {
                    console.error('Error checking Access Token:', error)
                })
            const usersRef = ref(db, '/usernames');
            const usersSnapshot = await get(usersRef);

            if (usersSnapshot.exists()) {
                const usersData = usersSnapshot.val();

                // Convert the object of users into an array of user objects
                const usersArray = Object.keys(usersData).map((key) => {
                    const userData = usersData[key];
                    return {
                        username: key, // 'key' is the username
                        // count: userData.count,
                        // HacktoberFestContributions: await getCount(username),
                        // AcceptedHacktoberFestPRs: await getAcceptedCount(username),
                        HacktoberFestContributions: userData.HacktoberFestContributions,
                        AcceptedHacktoberFestPRs: userData.AcceptedHacktoberFestPRs,
                        updatedAt: userData.updatedAt,
                    };
                });

                // Set the 'users' state with the new array
                setUsers(usersArray);
            }
            console.log(user)
            setIsPending(false)
            setLogined(true)
            setUserIn(user)
        } catch (e) {
            setError(e.message)
            console.log(error)
            setIsPending(false)
        }
    }
    return { login, error, isPending, logined, userIn, username, users }
}
