import React from 'react'
import { useSelector } from 'react-redux'

export const Navbar = () => {

    const { name } = useSelector(state => state.auth)

    return (
        <div className="index__navbar">
            <h3>Todo List Manager</h3>
            <div>
                <i className="fas fa-user"></i>
                <h2>{name}</h2>
            </div>
        </div>
    )
}
