import { useContext, useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { AlertContext } from '../context/alerts/AlertContext';
import { AuthContext } from '../context/auth/AuthContext';
import { ProductContext } from '../context/product/ProductContext';
import Error404 from '../pages/error404/Error404';
import Home from '../pages/home/Home';
import Access from '../pages/loginAndregister/Access';

import Product from '../pages/product/Product';
import Search from '../pages/search/Search';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRouter = () => {
    const { alert } = useContext(AlertContext);
    const { logged } = useContext(AuthContext);
    const { otherProductsR, loadSlider, loadWishlist, loadCart, loadCategory } = useContext(ProductContext);

    useEffect(() => {
        otherProductsR();
        loadSlider();
        loadCategory();
    }, []);

    useEffect(() => {
        if (logged) {
            loadCart();
            loadWishlist();
        }
    }, [logged]);


    return (
        <BrowserRouter>
            <Header />
            {
                alert
                &&
                (<div className={'alert ' + alert.category + ' rounded-pill'} role="alert">
                    {
                        alert.category === 'alert-success'
                            ?
                            <i className="fas fa-check mr-3"></i>
                            :
                            alert.category === 'alert-danger'
                            ?
                            <i className="fas fa-times mr-3"></i>
                            :
                            <i className="fas fa-exclamation mr-3"></i>
                    }
                    {alert.msg}
                </div>)
            }
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/product/:slug'
                    element={<Product />}
                />
                <Route
                    path='/search'
                    element={<Search />}
                />
                <Route
                    path='/login'
                    element={
                        <PublicRoutes>
                            <Access />
                        </PublicRoutes>
                    }
                />
                <Route
                    path='/user/*'
                    element={
                        <PrivateRoutes>
                            <DashboardRoutes />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path='*'
                    element={<Error404 />}
                />

            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;