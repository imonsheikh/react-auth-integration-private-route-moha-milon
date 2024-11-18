import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    // const name = 'Potato alu mai' 
    
    //Create user reusable function
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email, password)
    }

    //SignIn User reusable function
     const signInUser = (email,password) => {
       return signInWithEmailAndPassword(auth,email,password)
     }

     //sign Out
     const signOutUser = () => {
        return signOut(auth)
     }
    
     useEffect(() => { 
     //Set observer
     const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        // if(currentUser){
        //     console.log('Currently Logged user', currentUser);
        //     setUser(currentUser)
        // }
        // else{
        //     console.log('No user login ');
        //     setUser(null)       
        // }

        // ============ OR ============
        console.log('Current user', currentUser);
        setUser(currentUser) 
     })
   
     return () => {
        unSubscribe()
     }

     },[])

    const authInfo = {
        // name: name OR 
        // name,
        user,
        createUser,
        signInUser,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export  {AuthProvider };

/**
 * 1. Create context with null as default
 * 2. Create Provider
 * 3. set a default value
 * 4.[Attention please!]
 * 5. use the authProvider in the main.jsx  
 * 6. Access the children inside the authProvider in the main.jsx
 */
