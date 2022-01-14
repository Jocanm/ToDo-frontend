import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Loading } from '../components/LoadingView'

export const PublicLayout = () => {

    const navigate = useNavigate()
    const { id } = useSelector(state => state.auth)

    useEffect(() => {
        if (id) {
            navigate("/")
        }
    }, [id, navigate])
    if (id) {
        return <Loading />
    }

    return (
        <div className="auth__public-layout">
            <Outlet />
        </div>
    )
}
