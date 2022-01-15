import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Tooltip } from '@mui/material'
import { useDispatch } from 'react-redux'
import { starteDeletingTodo, startUpdateTodo } from '../../redux/actions/todoActions'
import { Loading } from '../LoadingView'
import { toastStyle } from '../../helpers/toastStyle'

export const TodosItem = ({ title, done, id, userId }) => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [todoDescription, setTodoDescription] = useState(title)

    const changeTodoState = async () => {
        setLoading(true)
        await dispatch(startUpdateTodo(id, !done, title, userId))
        setLoading(false)
    }

    const editTodoTitle = () => {
        if(todoDescription.length < 3){
            toast.error("Description must be at least 3 characters",toastStyle)
            return;
        }
        dispatch(startUpdateTodo(id,done, todoDescription))
        setEditMode(false)
    }

    const deleteTodo = () => {
        dispatch(starteDeletingTodo(id))
    }

    return (
        <li className="index__todo-item animate__animated animate__fadeIn animate__faster">
            <div>
                {
                    loading ?
                        <Loading height={24} width={26} fullScreen={false} color='#fb923c' /> :
                        <i
                            onClick={changeTodoState}
                            className={`fa fa-check index__todo-done ${done && 'bg-orange-400'}`}>
                        </i>
                }
                {
                    !editMode ?
                        <h4 className={`${done && 'line-through'}`}>{title}</h4> :
                        <textarea 
                        className="outline-none border-2 px-1 border-gray-200 rounded-lg w-full sm:resize-none"
                        type="text" 
                        value={todoDescription} 
                        onChange={(e) => { setTodoDescription(e.target.value) }}></textarea>
                }
            </div>
            <div>
                {
                    !editMode ?
                        <>
                        <Tooltip title="Update Todo" placement="top" arrow>
                            <i 
                            onClick={()=>{setEditMode(true)}}
                            className="fas fa-edit"></i>
                        </Tooltip>
                        <Tooltip title="Delete Todo" placement="top" arrow>
                            <i 
                            onClick={deleteTodo}
                            className="fas fa-trash"></i>
                        </Tooltip>
                        </>:
                        <>
                        <Tooltip title="Cancel Update" placement="top" arrow>
                            <i onClick={()=>{
                                setEditMode(false);
                                setTodoDescription(title)
                            }} className="fas fa-times text-lg"></i>
                        </Tooltip>
                        <Tooltip title="Confirm Update" placement="top" arrow>
                            <i 
                            onClick={editTodoTitle}
                            className="fas fa-check text-lg"></i>
                        </Tooltip>
                        </>
                }
            </div>
        </li>
    )
}
