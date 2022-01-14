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

            else{
                toast.error(body.msg)
            }

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong :/",toastStyle)
        }

    }

}

export const startCreateTodo = (title) => {

    return async(dispatch) =>{

        try {
            
            const res = await fetchConToken('todos',{title},'POST')
            const body = await res.json()

            if(body.ok){
                dispatch(todosCreateTodo(body.todo))
                toast.success(body.msg,toastStyle)
            }

            else{
                toast.error(body.msg,toastStyle)
            }

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong :/",toastStyle)
        }

    }

}

export const startChangeDoneTodo = (id,done,title) => {

    return async(dispatch) => {

        try {
            
            const res = await fetchConToken(`todos/${id}`,{done:!done,title},'PUT')
            const body = await res.json()

            if(body.ok){
                toast.success(body.msg,toastStyle)
                dispatch(todosUpdateTodo(body.todo))
                console.log(body);
            }

            else{
                toast.error(body.msg)
            }

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong :/",toastStyle)
        }

    }
}

const todosUpdateTodo = (todo) => ({
    type:types.todosUpdateTodo,
    payload:todo
}) 


const todosCreateTodo = (todo) => ({
    type:types.todosCreateTodo,
    payload:todo
})


const todosSetTodos = (todos) => ({
    type:types.todosSetTodos,
    payload:todos
})
