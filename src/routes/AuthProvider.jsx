import { createContext } from "react"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../utils/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    console.log('auth', auth)
    const provider = new GoogleAuthProvider();

    const createUserWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const user = { displayName: 'habibur' }
    const userInfo = {
        user,
        createUserWithGoogle
    }
    console.log(user)
    return <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
}
export default AuthProvider
