import { types } from "../types/types";

const initialState = {
    
    checking:true,

}


export const authReducer = (state=initialState,action) => {

    switch (action.type) {

        case types.authActiveUser:
            return {
                ...state,
                ...action.payload,
                checking:false
            }

        case types.authEndChecking:
            return {
                checking:false
            }
    
        default:
            return state;
    }
}