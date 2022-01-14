import { types } from "../types/types";

const initialState = {
    todos:[]
}


export const todosReducer = (state=initialState,action) => {

    switch (action.type) {

        case types.todosSetTodos:
            return {
                ...state,
                todos:action.payload
            }

        default:
            return state;
    }

}