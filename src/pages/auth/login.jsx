import React from 'react'
import { Input } from '../../components/Input'
import { useNavigate } from 'react-router-dom'
import { ButtonLoading } from '../../components/ButtonLoading'

export const Login = () => {

    const navigate = useNavigate()

    return (
        <div className="auth__container">
            <h2>Login to Your Account</h2>
            <form className="auth__input-container">
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
                    loading={false}
                    text="Start now"
                />
            </form>
            <section className="auth__brand-login">
                <h2>Or try with these</h2>
                <div>
                    <i className="fab fa-google"></i>
                    <i className="fab fa-github"></i>
                </div>
            </section>
            <h3 onClick={()=>{navigate("/auth/register")}}>
                Don't you have an account? <span>Sing up</span>
            </h3>
        </div>
    )
}
