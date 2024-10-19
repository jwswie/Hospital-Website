import './css/login-style.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ setUser }) {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (event) => {
        event.preventDefault();

        const phonePattern = /^\+\d{1,3}\s\(\d{3}\)\s\d{3}-\d{4}$/;

        if (!phonePattern.test(phoneNumber)) {
            alert("Invalid phone number format. Example: +1 (234) 567-8901");
            console.error('Invalid phone number format');
            return;
        }

        try {
            const checkResponse = await fetch(`https://localhost:5173/api/users/check-phone/${phoneNumber}`);
            if (checkResponse.ok) {
                const exists = await checkResponse.json();
                if (exists) {
                    alert('Phone number already registered. Please log in.');
                    return;
                }
            }
        } catch (error) {
            console.error('Error checking phone number:', error);
        }

        const userData = {
            userName: fullName,
            phoneNumber: phoneNumber,
        };

        try {
            const response = await fetch('https://localhost:5173/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('User registered:', result);
                setUser(result); 
                navigate('/');  
            } else {
                console.error('Failed to register user');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const loginResponse = await fetch(`https://localhost:5173/api/users/login/${phoneNumber}`);
            if (loginResponse.ok) {
                const user = await loginResponse.json();
                setUser(user);
                navigate('/'); 
            } else {
                alert('Phone number not found. Please sign up');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div>
            <div className="login-container">
                <input type="checkbox" id="check" />
                <div className="login form">
                    <header>Login</header>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Enter your phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                        <input type="submit" className="button" value="Login" />
                    </form>
                    <div className="signup">
                        <span className="signup">Don't have an account? <label htmlFor="check">Signup</label></span>
                    </div>
                </div>
                <div className="registration form">
                    <header>Signup</header>
                    <form onSubmit={handleSignup}>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Enter your phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                        <input type="submit" className="button" value="Signup" />
                    </form>
                    <div className="signup">
                        <span className="signup">Already have an account? <label htmlFor="check">Login</label></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
