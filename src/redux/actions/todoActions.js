import toast from "react-hot-toast";
import { fetchConToken } from "../../helpers/fetchMethods";
import { toastStyle } from "../../helpers/toastStyle";
import { types } from "../types/types"

export const startGettingTodos = () => {

    return async(dispatch) => {

        try {
            
            const res = await fetchConToken('todos')
            const body = await res.json()
            console.log(body);

            if(body.ok){
                dispatch(todosSetTodos(body.todos))
            }

        } catch (error) {
            console.error(error);
        }

    }

}

const todosSetTodos = (todos) => ({
    type:types.todosSetTodos,
    payload:todos
})
