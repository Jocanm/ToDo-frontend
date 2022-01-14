import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { Loading } from '../components/LoadingView'
import { Navbar } from '../components/ui/Navbar'
import { startGettingTodos } from '../redux/actions/todoActions'

export const PrivateLayout = () => {
    const { id } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(startGettingTodos())
    },[dispatch])

    useEffect(() => {
        if (!id) {
            navigate("/auth/login")
        }
    }, [id, navigate])

    if (!id) {
        return <Loading />
    }
    return (
        <div className="index__main-screen">
            <Navbar/>
            <Outlet/>
        </div>
    )
}
