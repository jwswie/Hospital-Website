import './css/login-style.css';
import React, { useEffect } from 'react';

function LoginPage() {

    return (
        <div>
            <div className="login-container">
                <input type="checkbox" id="check"></input>
                <div className="login form">
                    <header>Login</header>
                    <form action="#">
                        <input type="text" placeholder="Enter your phone number"></input>
                        <input type="password" placeholder="Enter your password"></input>
                        <input type="button" className="button" value="Login"></input>
                    </form>
                    <div className="signup">
                        <span className="signup">Don't have an account?
                            <label for="check">Signup</label>
                        </span>
                    </div>
                </div>
                <div className="registration form">
                    <header>Signup</header>
                    <form action="#">
                        <input type="text" placeholder="Enter your phone number"></input>
                        <input type="password" placeholder="Create a password"></input>
                        <input type="password" placeholder="Confirm your password"></input>
                        <input type="button" className="button" value="Signup"></input>
                    </form>
                    <div className="signup">
                        <span className="signup">Already have an account?
                            <label for="check"> Login</label>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;