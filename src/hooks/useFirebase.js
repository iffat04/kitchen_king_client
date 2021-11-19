import  { useEffect, useState } from 'react';
import { getAuth,updateProfile, createUserWithEmailAndPassword,signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged ,signOut } from "firebase/auth";
import initializeAuthentication from '../Pages/Firebase/firebase.initialize';



initializeAuthentication();

const useFirebase = () => {
    const[user,setUser]=useState({});
    const[isloading,setIsloading]=useState(true);
    const[error,setError]=useState('');
    const [admin, setAdmin] = useState(false);
    const[verifying, setVerifying] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    //create user with email pass
    const registerUser = (email,password,userName)=>{
        setIsloading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user)
                // ...
            })
            .then(()=>{
                updateProfile(auth.currentUser, {
                displayName: userName
              }).then(() => {
                //
              })
            })
            .then(()=>{
                saveUser(email,userName)
            })
            .then(()=>{
                setIsloading(true);
                signOut(auth)
                .then(()=>{
                    setUser({})
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(error.message);
                // ..
        });
    }
    ///check password and email
    const signInwithEmail =(email,password)=>{
        setIsloading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            console.log(user);
            // ...

        })
        .then(()=>{  
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(error.message);
            console.log(error.message);
        })
        .finally(()=>{
            setIsloading(false);
        })
    }
    ////admin verification 
    useEffect(()=>{
        setVerifying(true)
        fetch(`    https://whispering-retreat-62906.herokuapp.com/users/verify/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setAdmin(data.admin)
           
        })
        .finally(()=>{
           setVerifying(false)
        })
    },[user.email])

    ///sign in with google
    const signInUsingGoogle = ()=>{
        setIsloading(true);
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user);
            const email= result.user.email;
            const displayName = result.user.displayName;
            saveGglUser(email,displayName) 
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
        setIsloading(true)
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

    //save to mongodb
    const saveUser = (email, displayName)=>{
        setIsloading(true)
        const user = {email, displayName} ;
        fetch('    https://whispering-retreat-62906.herokuapp.com/users', {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

    }
    ///save info for google signin
    const saveGglUser = (email, displayName)=>{
        setIsloading(true)
        const user={email, displayName};
        console.log(user)
        fetch('    https://whispering-retreat-62906.herokuapp.com/users', {
            method:"PUT",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

    }

    return {
        user,
        auth,
        isloading,
        verifying,
        error,
        admin,
        registerUser,
        signInwithEmail,
        signInUsingGoogle,
        logOut,
        setUser
    }

};

export default useFirebase;



