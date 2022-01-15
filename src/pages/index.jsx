import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Tooltip } from '@mui/material'
import { useDispatch } from 'react-redux'
import { ButtonLoading } from '../components/ButtonLoading'
import { CatFactsModal } from '../components/ui/CatFactsModal'
import { TodosList } from '../components/ui/TodosList'
import { toastStyle } from '../helpers/toastStyle'
import { startCreateTodo } from '../redux/actions/todoActions'

export const Index = () => {

    const [title, setTitle] = useState("")
    const [titleFilter,setTitleFilter] = useState()
    const [loading, setLoading] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [doneTodos, setDoneTodos] = useState(false)

    const dispatch = useDispatch()

    const handleFindTask = () => {
        if (title.length === 0) {
            toast.error("Todo description can't be empty", toastStyle)
            return;
        }
        setTitleFilter(title)
        setDoneTodos("searched")
        setTitle("")
    }

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
                        onClick={() => { setOpenModal(true) }}
                        className="fas fa-cat index__float-buttons left-10"></i>
                </Tooltip>
            </div>
            <form
                onSubmit={handleCreateTask}
                className="index__todo-input">
                <input
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                    placeholder="Add a new task o find one"
                    type="text" />
                <div>
                    <ButtonLoading
                        text="Save"
                        disabled={title.length === 0}
                        loading={loading}
                    />
                    <ButtonLoading
                        onClick={handleFindTask}
                        type="button"
                        text="Find"
                        disabled={loading}
                    />
                </div>
            </form>
            <ul className="index__todos-filter">
                <li
                    onClick={() => { setDoneTodos(false) }}
                    className={`${!doneTodos && 'text-gray-900 font-bold'}`}>Active</li>
                <span className="cursor-default">/</span>
                <li
                    onClick={() => { setDoneTodos(true) }}
                    className={`${doneTodos === true && 'text-gray-900 font-bold'}`}>Completed</li>
                <span className="cursor-default">/</span>
                <li
                    onClick={() => { setDoneTodos("searched") }}
                    className={`${doneTodos === "searched" && 'text-gray-900 font-bold'}`}>Searched</li>
            </ul>
            <TodosList doneTodos={doneTodos} titleFilter={titleFilter} />
            <CatFactsModal open={openModal} setOpen={setOpenModal} />
            <h4 className="mt-4 flex gap-1 items-center font-bold justify-center">
                <span>Made by</span>
                <span className="text-orange-400 hover:text-orange-500 ">
                    <a target="_blank" href="https://github.com/Jocanm">Jose Luis Angarita</a>
                </span>
            </h4>
        </div>
    )
}
