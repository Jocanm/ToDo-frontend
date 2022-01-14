import { authReducer } from "./authReducer";
import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";
import { todosReducer } from "./todosReducer";


export const rootReducer = combineReducers({
    auth:authReducer,
    ui:uiReducer,
    todos:todosReducer
})