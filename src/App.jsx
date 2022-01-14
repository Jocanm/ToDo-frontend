import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import { AppRoutes } from './router/router'
import './style/style.scss'


export const App = () => {
    return (
        <Provider store={store}>
            <AppRoutes/>
            <Toaster/>
        </Provider >
    )
}
