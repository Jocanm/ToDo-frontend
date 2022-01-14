import React, { useState } from 'react'
import { Tooltip } from '@mui/material'
import { useDispatch } from 'react-redux'
import { startChangeDoneTodo } from '../../redux/actions/todoActions'
import { Loading } from '../LoadingView'

export const TodosItem = ({ title, done, id }) => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const changeTodoState = async () => {
        setLoading(true)
        await dispatch(startChangeDoneTodo(id, done, title))
        setLoading(false)
    }

    return (
        <li className="index__todo-item">
            <div>
                {
                    loading ?
                        <Loading height={24} width={26} fullScreen={false} color='#fb923c' /> :
                        <i
                            onClick={changeTodoState}
                            className={`fa fa-check index__todo-done ${done && 'bg-orange-400'}`}>
                        </i>
                }
                <h4 className={`${done && 'line-through'}`}>{title}</h4>
            </div>
            <div>
                <Tooltip title="Delete" placement="top" arrow>
                    <i className="fas fa-trash"></i>
                </Tooltip>
                <Tooltip title="Edit" placement="top" arrow>
                    <i className="fas fa-edit"></i>
                </Tooltip>
            </div>
        </li>
    )
}
