import { types } from "../../types/types";

export const alertReducer = (state, action) =>{
    switch(action.type){
        case types.show_alert:
            return{
                alert:action.payload
            }
        case types.hide_alert:
            return{
                alert:null
            }
        
        default:
            return state;
    }
}