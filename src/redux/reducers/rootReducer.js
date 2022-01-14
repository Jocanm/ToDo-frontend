import { authReducer } from "./authReducer";
import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";


export const rootReducer = combineReducers({
    auth:authReducer,
    ui:uiReducer
})