import React, { useReducer } from "react";

import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

import { types } from "../../types/types";
import { requests } from "../../config/requests";

const init = () => {
    const token = localStorage['token'];

    return { token: token || null, logged: token === undefined ? false : true };
}

const AuthState = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        token: null,
        user: null,
        message: null,
    }, init);

    // Sign in user
    const signupUser = async (data) => {
        try {
            const resp = await requests('/auth/registration/', 'POST', data);

            resp.key
                ?
                dispatch({
                    type: types.signup_success,
                    payload: resp.key
                })
                :
                dispatch({
                    type: types.signup_error,
                    payload: {
                        msg: 'No fue posible hace el registro',
                        category: 'alert-error'
                    }
                });

            await authenticatedUser();
        } catch (err) {
            console.log(err);
        }
    }

    // Get current user
    const authenticatedUser = async () => {
        try {
            const resp = await requests('/profile/', 'GET', {}, {
                'Authorization': `Token ${localStorage["token"]})`
            });
            resp
                ?
                dispatch({
                    type: types.get_user,
                    payload: resp.data.user
                })
                :
                dispatch({
                    type: types.login_error,
                    payload: {
                        msg: 'No fue posible cargar los datos del usuario',
                        category: 'alert-error'
                    }
                });
        } catch (error) {
            console.log(error);
        }
    }

    // Login user
    const login = async (data) => {
        try {
            const resp = await requests('/auth/login/', 'POST', data);
            resp.key
                ?
                dispatch({
                    type: types.login_success,
                    payload: resp.key
                })
                :
                dispatch({
                    type: types.login_error,
                    payload: {
                        msg: 'Email o contraseña incorrectos',
                        category: 'alert-error'
                    }
                });
            //await authenticatedUser();
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
                authenticatedUser,
                logout,
                logged: state.logged
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthState;