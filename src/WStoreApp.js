import AlertState from './context/alerts/AlertState';
import AuthState from './context/auth/AuthState';
import ProductState from './context/product/ProductState';

import AppRouter from './routes/AppRouter';

const WStoreApp = () => {

    return (
        <AlertState>
            <AuthState>
                <ProductState>
                    <AppRouter />
                </ProductState>
            </AuthState>
        </AlertState>
    );
}

export default WStoreApp;