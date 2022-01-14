import React from 'react'
import { Tooltip } from '@mui/material'

export const TodosItem = ({title}) => {
    return (
        <li className="index__todo-item">
            <div>
                <i className="fa fa-check index__todo-done"></i>
                <h4>{title}</h4>
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
