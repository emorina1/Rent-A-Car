import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      // Funksioni për Logout
const logout = () => {
  localStorage.removeItem('auth-token'); // Hiq token-in
  localStorage.removeItem('userName');  // Hiq emrin e përdoruesit
  window.location.replace('/login');    // Ridrejto te faqja e login
};

// Kontrollo nëse token-i ekziston
const token = localStorage.getItem('auth-token');
if (!token) {
  window.location.replace('/login'); // Nëse nuk ka token, ridrejto te login
}

// Shembull për përdorim të API për Signup
const signup = async (username, email, password) => {
  const response = await fetch('/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
  });

  const data = await response.json();
  if (data.success) {
    localStorage.setItem('auth-token', data.token);
    localStorage.setItem('userName', data.name);
    window.location.replace('/dashboard'); // Ridrejto te faqja kryesore
  } else {
    console.error(data.errors);
  }
};

// Shembull për përdorim të API për Login
const login = async (email, password) => {
  const response = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (data.success) {
    localStorage.setItem('auth-token', data.token);
    localStorage.setItem('userName', data.name);
    window.location.replace('/dashboard'); // Ridrejto te faqja kryesore
  } else {
    console.error(data.errors);
  }
};


      const responseData = await response.json();
      if (responseData.success) {
        // Ruajmë token dhe emrin e përdoruesit në localStorage
        localStorage.setItem('auth-token', responseData.token);
        localStorage.setItem('userName', responseData.name);
        alert(`Welcome back, ${responseData.name}!`); // Mesazh i mirëseardhjes
        window.location.replace('/'); // Ridrejto te faqja kryesore
      } else {
        alert(responseData.errors); // Shfaq gabimet nëse ka
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const signUp = async () => {
    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      if (responseData.success) {
        // Ruajmë token dhe emrin e përdoruesit në localStorage
        localStorage.setItem('auth-token', responseData.token);
        localStorage.setItem('userName', responseData.name);
        alert(`Welcome, ${responseData.name}!`); // Mesazh i mirëseardhjes
        window.location.replace('/'); // Ridrejto te faqja kryesore
      } else {
        alert(responseData.errors); // Shfaq gabimet nëse ka
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
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
            Already have an account? <span onClick={() => setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account? <span onClick={() => setState("Sign Up")}>Click here</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
