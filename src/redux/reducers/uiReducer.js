import { types } from "../types/types";

const initialState = {

    authLoading: false,

}

export const uiReducer = (state=initialState,action) =>{

    switch (action.type) {
        case types.uiStartLoading:
            return {
                ...state,
                authLoading: true
            }

        case types.uiFinishLoading:
            return {
                ...state,
                authLoading: false
            }
    
        default:
            return state;
    }

}