import {useReducer} from "react";

import { AlertContext } from "./AlertContext";

import { types } from "../../types/types";
import {alertReducer} from "./alertReducer";

const AlertState = props =>{
    const initialState = {
        alert:null
    }

    const [state, dispatch] = useReducer(alertReducer, initialState);

    const showAlert = (msg, category) => {
        dispatch({
            type: types.show_alert,
            payload:{
                msg,
                category
            }
        });

        setTimeout(()=>{
            dispatch({
                type: types.hide_alert
            });
        }, 5000);
    }
    return (
        <AlertContext.Provider
            value={{
                alert: state.alert,
                showAlert
            }}
        >
            {props.children}
        </AlertContext.Provider>
    );
}

export default AlertState;