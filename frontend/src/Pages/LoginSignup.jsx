import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const login = async () => {
        console.log("Login Function Executed");
        try {
            const response = await fetch("http://localhost:4000/login", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const responseData = await response.json();
            if (responseData.success) {
                localStorage.setItem('auth-token', responseData.token);
                window.location.replace("/");
            } else {
                alert(responseData.errors);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    const signUp = async () => {
        console.log("Signup Function Executed");
        try {
            const response = await fetch("http://localhost:4000/signup", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const responseData = await response.json();
            if (responseData.success) {
                localStorage.setItem('auth-token', responseData.token);
                window.location.replace("/");
            } else {
                alert(responseData.errors);
            }
        } catch (error) {
            console.error("Error during signup:", error);
        }
    };

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "Sign Up" && (
                        <input
                            name="username"
                            value={formData.username}
                            onChange={changeHandler}
                            type="text"
                            placeholder="Your Name"
                        />
                    )}
                    <input
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        type="email"
                        placeholder="Email Address"
                    />
                    <input
                        name="password"
                        value={formData.password}
                        onChange={changeHandler}
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <button onClick={() => (state === "Login" ? login() : signUp())}>
                    Continue
                </button>
                {state === "Sign Up" ? (
                    <p className="loginsignup-login">
                        Already have an account?{" "}
                        <span onClick={() => setState("Login")}>Login here</span>
                    </p>
                ) : (
                    <p className="loginsignup-login">
                        Create an account?{" "}
                        <span onClick={() => setState("Sign Up")}>Click here</span>
                    </p>
                )}
                <div className="loginsignup-agree">
                    <input type="checkbox" />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
