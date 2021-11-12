import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import inisializeAthentication from "../components/Pages/Login/Firebase/firebase.init";

inisializeAthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isAdminLoading, setAdminLoading] = useState(true);
    const [redLocation, setRedLocation] = useState(false);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();


    /**
     * create new User 
     */
     const createUser = (email, password, displayName, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setError('');
            updateProfile(auth.currentUser, {
                displayName: displayName, 
              }).then(() => {
                  saveuserInfoDB(email, displayName);
                  setUser(result.user);
                
              }).catch((error) => {
                // An error occurred
                // ...
              });
            history.push('/');
        })
        .catch((error) => {
            setError(error.message);
        }).finally(()=> setIsLoading(false));
    }

    /**
     * save user information into database 
     */
     const saveuserInfoDB = (email, displayName)=>{
        setIsLoading(true);
        const user = {email, displayName};
        fetch('http://localhost:5000/user',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then().finally(()=> setIsLoading(false));
     }

    /**
     * userLogin 
     */
     const userLogin = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
            setError('');
            setRedLocation(true);
        })
        .catch((error) => {
            setError(error.message);
        }).finally(()=> setIsLoading(false));
    }

    /**
     * redirect url
     */
    const handleredLocation = () =>{
        setRedLocation(false);
    }

    
    useEffect(()=>{
        setAdminLoading(true);
        fetch(`http://localhost:5000/user/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            const role = data[0]?.role;
            if(role === 'admin'){
                setAdmin(true);
            }else{
                setAdmin(false);
            }
        }).finally(()=> setAdminLoading(false));
    },[user?.email]);

    /**
     * on Auth State Changed
     */
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },[])

    /**
     * logout system
     */
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
        // Sign-out successful.
        }).finally(()=> setIsLoading(false));
    }

    return {
        user,
        error,
        admin,
        userLogin,
        createUser,
        logOut,
        isLoading,
        isAdminLoading,
        redLocation,
        handleredLocation
    }
}

export default useFirebase;