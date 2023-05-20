import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";
export const authContext = createContext();
const auth = getAuth(app);
const Auth = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)

    const userWithEmailPass = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signinWithEmailPass = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signWithGoogle = (Provider) => {
        setLoader(true)
        return signInWithPopup(auth, Provider)
    }

    // user state observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        })

        return () => {
            return unsubscribe();
        }
    }, [])

    const value = {
        user,
        auth,
        loader,
        userWithEmailPass,
        signinWithEmailPass,
        signWithGoogle
    }

    return <authContext.Provider value={value}>{children}</authContext.Provider>
};

export default Auth;