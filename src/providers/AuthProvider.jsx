import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase.init';

const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const name = 'Potato alu mai' 
    
    //Create user reusable function
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email, password)
    }

    //SignIn User reusable function
     const signInUser = (email,password) => {
       return signInWithEmailAndPassword(auth,email,password)
     }

     //Set observer
     onAuthStateChanged(auth, currentUser =>{
        if(currentUser){
            console.log('Currently Logged user', currentUser);
            setUser(currentUser)
        }
        else{
            console.log('No user login ');
            setUser(null)
            
        }
     })

    const authInfo = {
        // name: name OR 
        name,
        user,
        createUser,
        signInUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export  {AuthProvider, AuthContext};

/**
 * 1. Create context with null as default
 * 2. Create Provider
 * 3. set a default value
 * 4.[Attention please!]
 * 5. use the authProvider in the main.jsx  
 * 6. Access the children inside the authProvider in the main.jsx
 */
