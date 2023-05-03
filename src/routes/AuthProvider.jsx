import { createContext, useEffect, useState } from "react"
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../utils/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const auth = getAuth(app)
    console.log('auth', auth) 


    // register with email password
    const registerWithEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // login with email password 
    const loginWthEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    // google login 
    const loginWithGoogle = () => {
        setLoading(true)
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)

    }

    // Github login 
    const loginWithGithub = () => {
        setLoading(true)
        const provider = new GithubAuthProvider()
        return signInWithPopup(auth, provider)

    }

    // logOUt 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }

    // set naem and profile photo 
    const setNameAndPhoto = (userName, imageUrl) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: imageUrl
        })
    }


    // Auth Ovserver 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('user from state', currentUser)
            setLoading(false)

        })
        return () => {
            unSubscribe()
        }
    }, [])



    const userInfo = {
        user,
        setUser,
        registerWithEmailPassword,
        loginWthEmailPassword,
        loginWithGoogle,
        loginWithGithub,
        logOut,
        setNameAndPhoto,
        setLoading,
        isLoading



    }

    return <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
}
export default AuthProvider
