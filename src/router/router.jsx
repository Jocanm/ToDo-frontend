import React, { useEffect } from 'react'
import { Index } from '../pages'
import { Login } from '../pages/auth/login'
import { Register } from '../pages/auth/register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PublicLayout } from '../layout/PublicLayout'
import { useDispatch, useSelector } from 'react-redux'
import { Loading } from '../components/LoadingView'
import { startRefreshToken } from '../redux/actions/authActions'

export const AppRoutes = () => {

    const dispatch = useDispatch()
    const {checking} = useSelector(state=>state.auth)

    useEffect(()=>{
        dispatch(startRefreshToken())
    },[dispatch])

    if(checking) {
        return <Loading/>
    }

    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route element={<PublicLayout />}>
                        <Route path="/auth/login" element={<Login />} />
                        <Route path="/auth/register" element={<Register />} />
                    </Route>
                </Routes>
            </Router>
    )
}
