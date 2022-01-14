import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../components/LoadingView'
import { Navbar } from '../components/ui/Navbar'

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
        <div className="index__main-screen">
            <Navbar/>
            <div className="index__content">
                Pagina de contenido
            </div>
        </div>
    )
}
