import { Tooltip } from '@mui/material'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { ButtonLoading } from '../components/ButtonLoading'
import { CatFactsModal } from '../components/ui/CatFactsModal'
import { TodosList } from '../components/ui/TodosList'
import { toastStyle } from '../helpers/toastStyle'
import { startCreateTodo } from '../redux/actions/todoActions'

export const Index = () => {

    const [title, setTitle] = useState("")
    const [loading, setLoading] = useState(false)
    const [openModal,setOpenModal] = useState(false)
    const dispatch = useDispatch()

    const [doneTodos, setDoneTodos] = useState(false)

    const handleCreateTask = async (e) => {
        e.preventDefault()
        if (title.length < 3) {
            toast.error("Todo description must be at least 3 characters", toastStyle)
            return;
        }
        setLoading(true)
        await dispatch(startCreateTodo(title))
        setTitle("")
        setLoading(false)
    }

    return (
        <div className="index__content">
            <div className="flex items-center gap-3">
                <h1>Lets get started</h1>
                <Tooltip arrow placement="top" title="Random facts about cats">
                    <i 
                    onClick={()=>{setOpenModal(true)}}
                    className="fas fa-cat index__cat-button"></i>
                </Tooltip>
            </div>
            <form
                onSubmit={handleCreateTask}
                className="index__todo-input">
                <input
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                    placeholder="Add a new todo"
                    type="text" />
                <ButtonLoading
                    text="Save"
                    disabled={title.length === 0}
                    loading={loading}
                />
            </form>
            <ul className="index__todos-filter">
                <li
                    onClick={() => { setDoneTodos(false) }}
                    className={`${!doneTodos && 'text-gray-900 font-bold'}`}>Active</li>
                <span className="cursor-default">/</span>
                <li
                    onClick={() => { setDoneTodos(true) }}
                    className={`${doneTodos && 'text-gray-900 font-bold'}`}>Completed</li>
            </ul>
            <TodosList doneTodos={doneTodos} />
            <CatFactsModal open={openModal} setOpen={setOpenModal}/>
        </div>
    )
}
