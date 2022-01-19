import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ItemMenuCart from '../pages/profile/Cart';

import Profile from '../pages/profile/Profile';

const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path='profile' element={<Profile />} />
            <Route path='cart' element={<ItemMenuCart />} />
        </Routes>
    );
}

export default DashboardRoutes;