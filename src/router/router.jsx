import React from 'react'
import { Index } from '../pages'
import { Login } from '../pages/auth/login'
import { Register } from '../pages/auth/register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/auth/login" element={<Login/>}/>
                <Route path="/auth/register" element={<Register/>}/>
            </Routes>
        </Router>
    )
}
