import React from 'react'
import toast from 'react-hot-toast'
import { Input } from '../../components/Input'
import { useNavigate } from 'react-router-dom'
import { ButtonLoading } from '../../components/ButtonLoading'
import { useFormData } from '../../hooks/useFormData'
import { validateRegisterUser } from '../../helpers/validateAuthForm'
import { useDispatch, useSelector } from 'react-redux'
import { startRegister } from '../../redux/actions/authActions'

export const Register = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {authLoading} = useSelector(state=>state.ui)
    const {form,formData,updateFormData} = useFormData()

    const handleRegister = (e) => {
        e.preventDefault()
        if(validateRegisterUser(formData)){
            dispatch(startRegister(formData))
        }
    }

    return (
        <div className="auth__container">
            <h2>Create a new account</h2>
            <form 
            onSubmit={handleRegister}
            onChange={updateFormData}
            ref = {form}
            className="auth__input-container">
                <Input
                    required={false}
                    name="name"
                    placeholder="Name"
                    type="text"
                    size="small"
                />
                <Input
                    required={false}
                    name="email"
                    placeholder="Email"
                    type="text"
                    size="small"
                />
                <Input
                    required={false}
                    name="password"
                    placeholder="Password"
                    type="password"
                    size="small"
                />
                <Input
                    required={false}
                    name="password2"
                    placeholder="Confirm Password"
                    type="password"
                    size="small"
                />
                <ButtonLoading
                    loading={authLoading}
                    disabled={Object.keys(formData).length === 0}
                    text="Join us"
                />
            </form>
            <section className="auth__brand-login">
                <h2>Or try with these</h2>
                <div>
                    <i className="fab fa-google"></i>
                    <i className="fab fa-github"></i>
                </div>
            </section>
            <h3 onClick={() => { navigate("/auth/login") }}>
                Already have an account? <span>Sing in</span>
            </h3>
        </div>
    )
}
