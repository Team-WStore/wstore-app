import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../context/auth/AuthContext';

const PublicRoutes = ({ children }) => {

    const { logged } = useContext(AuthContext);

    return logged
        ?
        <Navigate to='/' />
        :
        children;
}

export default PublicRoutes;