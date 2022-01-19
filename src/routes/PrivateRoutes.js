import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../context/auth/AuthContext';

const PrivateRoutes = ({ children }) => {

    const { logged } = useContext(AuthContext);
    /* const location = useLocation();
    localStorage.setItem('lastPath', location.pathname); */
    return logged
        ?
        children
        :
        <Navigate to='/login' />
}

export default PrivateRoutes;