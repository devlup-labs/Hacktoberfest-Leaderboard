import { useState } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase'

export const useGSignIn = () => {
    const [logined, setLogined] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const provider = new GoogleAuthProvider()
    const login = async () => {
        setIsPending(true)
        try {
            const res = await signInWithPopup(auth, provider)
            if (!res) {
                throw new Error("Couldnt Sign In")
            }
            setLogined(true)
            setIsPending(false)
        } catch (error) {
            console.log(error)
        }
    }
    return { login, logined, isPending }
}

