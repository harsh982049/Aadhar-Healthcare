import { Outlet, Navigate, useParams } from "react-router-dom";
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../../firebaseconf';

const ProtectedRoutes = () => {
    const [user] = useAuthState(auth);
  
    if (!user) {
      return <Navigate to="*" />;   }
  
    return <Outlet />;
  };

export default ProtectedRoutes