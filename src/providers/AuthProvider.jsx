import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase.init';

const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const name = 'Potato alu mai' 

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const authInfo = {
        // name: name OR 
        name,
        createUser
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
