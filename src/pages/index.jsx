import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../components/LoadingView'
import { Navbar } from '../components/ui/Navbar'
import { TodosList } from '../components/ui/TodosList'
import { startGettingTodos } from '../redux/actions/todoActions'

export const Index = () => {

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
            <Navbar />
            <div className="index__content">
                <h1>Lets get started</h1>
                <div className="index__todo-input">
                    <input
                        placeholder="Add a new task"
                        type="text" />
                    <button>Save</button>
                </div>
                <ul className="index__todos-filter">
                    <li>View All</li>
                    <li>Active</li>
                    <li>Completed</li>
                </ul>
                <TodosList/>
            </div>
        </div>
    )
}
