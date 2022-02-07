import { useContext, useReducer } from "react";

import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

import { types } from "../../types/types";
import { requests } from "../../config/requests";
import { AlertContext } from "../alerts/AlertContext";

const init = () => {
    const token = localStorage['token'];

    return { token: token || null, logged: token === undefined ? false : true };
}

const AuthState = ({ children }) => {
    const { showAlert } = useContext(AlertContext);

    const [state, dispatch] = useReducer(authReducer, {
        token: null,
        user: null,
        message: null,
    }, init);

    // Sign in user
    const signupUser = async (data) => {
        try {
            const resp = await requests('/auth/registration/', 'POST', data);
            if (resp.key) {
                dispatch({
                    type: types.signup_success,
                    payload: resp.key
                });
                showAlert('Registro exitoso. Bienvenido :)', 'alert-success');
                await authenticatedUser();
            } else {
                dispatch({
                    type: types.signup_error,
                });
                showAlert('Error al registrar, usuario existente :(', 'alert-danger');
            }
        } catch (err) {
            console.log(err);
        }
    }

    // Get current user
    const authenticatedUser = async () => {
        try {
            const token = localStorage["token"];
            const resp = await requests('/profile/', 'GET', {},
                { 'Authorization': "Token " + token }
            );

            resp
                ?
                dispatch({
                    type: types.get_user,
                    payload: resp
                })
                :
                dispatch({
                    type: types.login_error,
                });
        } catch (error) {
            console.log(error);
        }
    }

    // Login user
    const login = async (data) => {
        try {
            const resp = await requests('/auth/login/', 'POST', data);
            if (resp.key) {
                dispatch({
                    type: types.login_success,
                    payload: resp.key
                });
                showAlert('Inicio de sesión exitoso', 'alert-success');
                await authenticatedUser();
            } else {
                dispatch({
                    type: types.login_error,
                });
                showAlert('Email o contraseña incorrectos', 'alert-danger');
            }
        } catch (err) {
            console.log(err);
        }
    }

    // Close session
    const logout = async () => {
        try {
            const resp = await requests('/auth/logout/', 'POST', {}, {
                'Authorization': `Token ${localStorage["token"]})`
            });
            resp.detail
                ?
                dispatch({
                    type: types.logout,
                })
                :
                dispatch({
                    type: types.login_error,
                    payload: {
                        msg: 'Error al intentar cerrar la sesión',
                        category: 'alert-error'
                    }
                });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                user: state.user,
                message: state.message,
                signupUser,
                login,
                logout,
                logged: state.logged,
                authenticatedUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthState;