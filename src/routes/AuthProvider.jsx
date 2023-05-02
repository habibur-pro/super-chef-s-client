import { createContext } from "react"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../utils/firebase.config";


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    const createUserWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }


    const user = { displayName: 'habibur' }
    const userInfo = {
        user,
        createUserWithGoogle
    }
    return <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
}
export default AuthProvider
