import React from 'react'
import { Input } from '../../components/Input'
import { useNavigate } from 'react-router-dom'
import { ButtonLoading } from '../../components/ButtonLoading'
import { useDispatch, useSelector } from 'react-redux'
import { useFormData } from '../../hooks/useFormData'
import { validateLoginUser } from '../../helpers/validateAuthForm'
import { startLogin } from '../../redux/actions/authActions'

export const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {authLoading} = useSelector(state=>state.ui)

    const {form,formData,updateFormData} = useFormData()

    const handleLoginUser = (e) => {
        e.preventDefault()
        if(validateLoginUser(formData)){
            dispatch(startLogin(formData))
        }
    }


    return (
        <div className="auth__container">
            <h2>Login to Your Account</h2>
            <form 
            ref={form}
            onSubmit={handleLoginUser}
            onChange={updateFormData}
            className="auth__input-container">
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
                <ButtonLoading
                    disabled={Object.keys(formData).length === 0}
                    loading={authLoading}
                    text="Start now"
                />
            </form>
            {/* <section className="auth__brand-login">
                <h2>Or try with these</h2>
                <div>
                    <i className="fab fa-google"></i>
                    <i className="fab fa-github"></i>
                </div>
            </section> */}
            <h3 onClick={()=>{navigate("/auth/register")}}>
                Don't you have an account? <span>Sing up</span>
            </h3>
        </div>
    )
}
