import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

export const useSignout = () => {
    const [out, setOut] = useState(false)
    const logout = async () => {
        setOut(false)
        try {
            await signOut(auth)
            console.log("user logged out")
            setOut(true)
            window.location.reload()
        } catch (error) {
            console.log(error.message);
        }
    };
    return { logout, out };
};
