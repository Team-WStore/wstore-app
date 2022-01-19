import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Error404 from '../pages/error404/Error404';
import Home from '../pages/home/Home';

import LoginAndRegister from '../pages/loginAndregister/LoginAndRegister';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRouter = () => {
    return (
        <BrowserRouter>
                <Header />
                
                <Routes>
                    <Route
                        path='/'
                        element={ <Home/> }
                    />
                    <Route
                        path='/login'
                        element={
                            <PublicRoutes>
                                <LoginAndRegister/>
                            </PublicRoutes>
                        }
                    />
                    <Route
                        path='/user/*'
                        element={
                            <PrivateRoutes>
                                <DashboardRoutes/>
                            </PrivateRoutes>
                        }
                    />
                    <Route
                        path='*'
                        element={<Error404/>}
                    />
                    
                </Routes>

                <Footer/>
        </BrowserRouter>
    );
}

export default AppRouter;