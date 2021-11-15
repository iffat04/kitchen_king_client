import  { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged ,signOut } from "firebase/auth";
import initializeAuthentication from '../Pages/Firebase/firebase.initialize';



initializeAuthentication();

const useFirebase = () => {
    const[user,setUser]=useState({});
    const[isloading,setIsloading]=useState(true);
    const[error,setError]=useState('');
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    ///sign in with google
    const signInUsingGoogle = ()=>{
        setIsloading(true);
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user);
          
        })
        .catch(error=>{
            setError(error.message);
        })
        .finally(()=>{
            setIsloading(false);
        })

    console.log('click')
    }

    ///log out
    const logOut =()=>{
        setIsloading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=>{
            setIsloading(false);
        })
    }

    //observe user auth state
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }
            else{
                //user signed out
            }
            setIsloading(false);
        }
        );
    },[]);

    return {
        user,
        auth,
        isloading,
        error,
        signInUsingGoogle,
        logOut,
        setUser
    }

};

export default useFirebase;



