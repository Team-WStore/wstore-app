import AlertState from './context/alerts/AlertState';
import AuthState from './context/auth/AuthState';

import AppRouter from './routes/AppRouter';

const WStoreApp = () => {
    return (
        <AuthState>
            <AlertState>
                <AppRouter />
            </AlertState>
        </AuthState>
    );
}

export default WStoreApp;