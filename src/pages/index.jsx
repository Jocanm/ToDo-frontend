import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../components/LoadingView'

export const Index = () => {

    const { id } = useSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!id){
            navigate("/auth/login")
        }
    },[id,navigate])

    if(!id){
        return <Loading/>
    }

    return (
        <div>
            Pagina index
        </div>
    )
}
