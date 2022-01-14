import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../components/LoadingView'
import { Navbar } from '../components/ui/Navbar'

export const Index = () => {

    const { id } = useSelector(state => state.auth)
    const navigate = useNavigate()

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
            <Navbar />
            <div className="index__content">
                <h1>Lets get started</h1>
                <div className="index__todo-input">
                    <input 
                    placeholder="New task"
                    type="text" />
                    <button>Save</button>
                </div>
            </div>
        </div>
    )
}
