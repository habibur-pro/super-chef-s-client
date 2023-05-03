import { createContext, useEffect, useState } from "react"
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../utils/firebase.config";
import Spinner from "../components/Spinner";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const auth = getAuth(app)
    console.log('auth', auth) 



    // register with email password
    const registerWithEmailPassword = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // login with email password 
    const loginWthEmailPassword = (email, password) => {
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    // google login 
    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)

    }

    // Github login 
    const loginWithGithub = () => {

        const provider = new GithubAuthProvider()
        return signInWithPopup(auth, provider)

    }

    // logOUt 
    const logOut = () => {
        return signOut(auth)

    }

    // set name and profile photo 
    // const setNameAndPhoto = (userName, imageUrl) => {
        
    //     return updateProfile(auth.currentUser, {
    //         displayName: userName,
    //         photoURL: imageUrl
    //     })
    // }


    // Auth Ovserver 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
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
        setLoading,
        isLoading
    }
    if (isLoading) {
        return <Spinner />
    }
    return <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
}
export default AuthProvider
