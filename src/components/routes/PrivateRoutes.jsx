import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

   const {user,loading} = useContext(AuthContext)
   console.log(loading);
   

   if(loading){

    return <span className="loading loading-infinity loading-lg"></span>
   }

   if(user){
    return children
   }

    return (
       <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoutes;