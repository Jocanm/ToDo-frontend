import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonLoading } from '../../components/ButtonLoading'
import { Input } from '../../components/Input'

export const Register = () => {

    const navigate = useNavigate()

    return (
        <div className="auth__container">
            <h2>Create a new account</h2>
            <form className="auth__input-container">
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
                <ButtonLoading
                    loading={false}
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
