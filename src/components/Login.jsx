import React, { useState } from 'react';
import './login.css'

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const signIn = (e) => {
        e.preventDefault();
    }
    const register = (e) => {
        e.preventDefault();
    }
    return (
        <div className='login'>

            <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" />

            <div className="login__container">
                <h1>Sign-in</h1>

                <form >
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>By signing-in you agree to the Fake amazon conditions of use and sale.Please see our Privacy Notice our Cookies Notice and our interest-based ads notice</p>
                <button type='submit' onClick={register} className='login__registerButton'>Create your Amazon Account</button>



            </div>

        </div>
    )
}
