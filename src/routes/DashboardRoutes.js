import { Route, Routes } from 'react-router-dom';
import Checkout from '../pages/checkout/Checkout';
import ItemMenuCart from '../pages/profile/Cart';

import Profile from '../pages/profile/Profile';

const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path='profile' element={<Profile />} />
            <Route path='cart' element={<ItemMenuCart />} />
            <Route path='checkout' element={<Checkout />} />
        </Routes>
    );
}

export default DashboardRoutes;