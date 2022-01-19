import { types } from "../../types/types";

export const authReducer = (state, action) =>{
    switch(action.type){
        case types.signup_success:
        case types.login_success:
            localStorage.setItem('token', action.payload);
            
            return {
                ...state,
                logged: true
            }
        case types.get_user:
            return{
                ...state,
                logged: true,
                user: action.payload
            }
        case types.logout:
        case types.login_error:
        case types.signup_error:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                logged: false
            }
        default:
            return state;
    }
}