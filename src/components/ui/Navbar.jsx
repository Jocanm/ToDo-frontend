import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../redux/actions/authActions'

export const Navbar = () => {

    const { name } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleLogout = () => { 
        dispatch(startLogout())
    }

    return (
        <div className="index__navbar-container">
            <div className="index__navbar relative">
                <h3>Todo List</h3>
                <div>
                    {
                        name.split(" ")[1] ?
                        (<h2>{name.split(" ")[0] + " " + name.split(" ")[1]}</h2>):
                        (<h2>{name.split(" ")[0]}</h2>)
                    }
                    <i 
                    onClick={handleLogout}
                    className="fas fa-sign-out-alt cursor-pointer"></i>
                </div>
            </div>
        </div>
    )
}
