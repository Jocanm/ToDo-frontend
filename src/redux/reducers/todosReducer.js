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
        
        case types.todosCreateTodo:
            return {
                ...state,
                todos:[...state.todos,action.payload]
            }

        case types.todosUpdateTodo:
            return {
                ...state,
                todos:state.todos.map(e=>{
                    if(e.id === action.payload.id){
                        return action.payload
                    }
                    else{
                        return e
                    }
                })
            }

        case types.todosDeleteTodos:
            return {
                ...state,
                todos:state.todos.filter(e=>e.id !== action.payload)
            }
        
        default:
            return state;
    }

}