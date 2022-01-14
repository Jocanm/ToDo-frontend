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

export const startUpdateTodo = (id,done,title,userId) => {

    return async(dispatch) => {

        dispatch(todosUpdateTodo({id,done,title,userId}))
        try {
            
            const res = await fetchConToken(`todos/${id}`,{done,title},'PUT')
            const body = await res.json()

            if(body.ok){
                toast.success(body.msg,toastStyle)
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

export const starteDeletingTodo = (id) => {

    return async(dispatch) => {

        dispatch(todosDeleteTodo(id))
        try {
            
            const res = await fetchConToken(`todos/${id}`,{},'DELETE')
            const body = await res.json()

            if(body.ok){
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

export const startCreatingCatsTodos = (todos) => {

    return async(dispatch,getState) => {

        const {id} = getState().auth

        const catTodos = todos.map(e=>{
            return {
                title:e.fact,
                userId:id
            }
        })

        console.log("Cat facts editados",catTodos);

        try {

            const res = await fetchConToken('todos/many',{catTodos},'POST')
            const body = await res.json()
            console.log(body);
            if(body.ok){
                await dispatch(startGettingTodos())
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

// export const startUpdateTodo = (id,done,title,userId) => {

//     return async(dispatch) => {

//         try {
            
//             const res = await fetchConToken(`todos/${id}`,{done,title},'PUT')
//             const body = await res.json()

//             if(body.ok){
//                 toast.success(body.msg,toastStyle)
//                 dispatch(todosUpdateTodo(body.todo))
//                 console.log(body);
//             }

//             else{
//                 toast.error(body.msg)
//             }

//         } catch (error) {
//             console.log(error);
//             toast.error("Something went wrong :/",toastStyle)
//         }

//     }
// }

const todosDeleteTodo = (id) => ({
    type:types.todosDeleteTodos,
    payload:id
})

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
