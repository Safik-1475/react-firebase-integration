import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase-init';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState();

    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    }

    return {
        user,
        handleSignOut,
        signInGoogle
    }
}
export { useFirebase }