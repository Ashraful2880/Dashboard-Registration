import { getAuth, updateProfile, signOut, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import iniAuthentication from "../Firebase/Firebase.init";

iniAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    // All State Here
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState("");
    const [isloading, setIsLoading] = useState(true);

    // Signin With Google

    const googleSignIn = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // const user = result.user;
                // const googleUser = { displayName: user.displayName, email: user.email }
                // setUser(user);;
                window.location.replace('/');
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }

    //<-------------- Register New User --------------->

    const handleRegister = (event) => {
        event.preventDefault();
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const newUser = ({ ...user, displayName: name });
                setUser(newUser);
                updateName();
                alert("User Created Successfully");
                window.location.replace('/');
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }

    const updateName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {
            setError(error.message)
        });
    }

    // Handle Sign in Existing User

    const handleSignIn = (event) => {
        event.preventDefault();
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                window.location.replace('/');
            })
            .catch((error) => {
                setError(error.message)
                console.log(error?.message);
            }).finally(() => setIsLoading(false));
    }

    // Handle Sign Out

    const handleSignOut = () => {
        const auth = getAuth();
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser('');
        }).catch((error) => {
            setError(error.message)
        }).finally(() => setIsLoading(false));
    }

    // observe whether user auth state changed or not

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser("");
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);


    return { setName, setEmail, setPassword, handleRegister, error, user, handleSignIn, handleSignOut, googleSignIn, setError, isloading }
}

export default useFirebase;