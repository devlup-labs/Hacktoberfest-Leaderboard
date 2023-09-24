import { useState } from 'react'
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase'

export const useSignIn = () => {
    const [error, setError] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const [logined, setLogined] = useState(false)
    const [userIn, setUserIn] = useState(null)
    const provider = new GithubAuthProvider()
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
    return { login, error, isPending, logined, userIn }
}
