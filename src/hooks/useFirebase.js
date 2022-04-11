import { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase-init';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState();

    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(result)
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return { user, signInGoogle }
}
export { useFirebase }