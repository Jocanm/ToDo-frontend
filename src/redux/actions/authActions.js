import toast from "react-hot-toast";
import { fetchConToken, fetchSinToken } from "../../helpers/fetchMethods"
import { toastStyle } from "../../helpers/toastStyle";
import { types } from "../types/types"
import { finishLoading, startLoading } from "./uiActions"

export const startRegister = ({name,email,password}) =>{

    return async(dispatch) => {

        dispatch(startLoading())

        const res = await fetchSinToken('auth/register',
        {email,password,name},'POST')

        const body = await res.json()

        if(body.ok){
            const {token,name,email,id} = body.user
            localStorage.setItem('token',token)
            dispatch(loginUser({id,name,email}))
            toast.success(`Welcome ${name}`,toastStyle)
        }

        else{
            toast.error(body.msg,toastStyle)
        }

        dispatch(finishLoading())
    }

}

export const startLogin = ({email,password}) => {

    return async(dispatch) => {

        dispatch(startLoading())

        const res = await fetchSinToken('auth/login',{email,password},'POST')

        const body = await res.json()
        
        if(body.ok){
            const {token,name,email,id} = body.user
            localStorage.setItem('token',token)
            dispatch(loginUser({id,name,email}))
            toast.success(`Welcome ${name}`,toastStyle)
        }

        else{
            toast.error(body.msg,toastStyle)
        }

        dispatch(finishLoading())

    }
}

export const startRefreshToken = () => {

    return async(dispatch)=>{

        const res = await fetchConToken('auth/refresh')
        const body = await res.json()

        if(!body.ok){
            dispatch(endChecking())
            localStorage.clear()
        }

        else{
            const {id,email,name,token} = body.user
            localStorage.setItem('token',token)
            dispatch(loginUser({id,name,email}))
        }

    }
}

export const startLogout = () => {

    return (dispatch) =>{

        localStorage.clear()
        dispatch(logoutUser())
    }
}

const loginUser = (user) =>{
    return {
        type:types.authActiveUser,
        payload:user
    }
}

const logoutUser = () =>({type:types.authLogout})

const endChecking = () => ({type:types.authEndChecking})