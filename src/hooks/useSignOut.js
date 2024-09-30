import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSignout = () => {
  const [out, setOut] = useState(false);
  const navigate = useNavigate();

  const logout = async () => {
    setOut(false);
    try {
      await signOut(auth);
      console.log("User logged out");
      setOut(true);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return { logout, out };
};
