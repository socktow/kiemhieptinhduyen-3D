import React, { useState } from "react";
import { Button, message, Checkbox } from "antd";
import "./LoginSignup.scss";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",  // Changed email to username
    password: "",
    confirmPassword: "",
    email: "",  // Keep email only for the signup form
  });
  const [loading, setLoading] = useState(false);
  const [messageText, setMessageText] = useState('');

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.username || !formData.password) {
      message.error("Username and password are required");
      return false;
    }
    if (state === "Sign up" && formData.password !== formData.confirmPassword) {
      message.error("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (!validateForm()) return;
    setLoading(true);
    
    // Send username instead of email for login
    const loginData = {
      username: formData.username,  // Send username instead of email
      password: formData.password,
    };

    // Simulate API call
    fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        message.success("Login successful!");
        setLoading(false);
        window.location.replace("/"); // Redirect to home page after login
      } else {
        message.error(data.errors || "Login failed.");
        setLoading(false);
      }
    })
    .catch((error) => {
      message.error("Server error.");
      setLoading(false);
    });
  };

  const handleSignup = () => {
    if (!validateForm()) return;

    const checkbox = document.querySelector('.loginsignup-agree input[type="checkbox"]');
    if (!checkbox.checked) {
      message.error('You must agree to the Terms of Service and Privacy Policy to sign up.');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    const signupData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    fetch('http://localhost:4000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        setMessageText("Please verify your email to log in");
        message.success("Please verify your email to log in");
        setLoading(false);
        setTimeout(() => {
          window.location.replace("/login");
        }, 5000);
      } else {
        message.error(data.errors || "Sign up failed.");
        setLoading(false);
      }
    })
    .catch((error) => {
      message.error("Server error.");
      setLoading(false);
    });
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign up" && (
            <input
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="email"
              placeholder="Email Address"
            />
          )}
          <input
            name="username"
            value={formData.username}
            onChange={changeHandler}
            type="text"
            placeholder="Username"  // Display Username field for login and signup
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
          {state === "Sign up" && (
            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              type="password"
              placeholder="Confirm Password"
            />
          )}
        </div>
        <Button 
          type="primary" 
          loading={loading} 
          style={{ width: "100%", marginTop: "20px", height: "50px", fontSize: "16px", textTransform: "uppercase" }}
          onClick={() => (state === "Sign up" ? handleSignup() : handleLogin())}
        >
          Continue
        </Button>
        {state === "Sign up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Log In</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span onClick={() => setState("Sign up")}>Click here</span>
          </p>
        )}
        {state === "Sign up" && (
          <div className="loginsignup-agree">
            <Checkbox>
              I agree to the <span>Terms of Service</span> and{" "}
              <span>Privacy Policy</span>
            </Checkbox>
          </div>
        )}
        {messageText && (
          <div className="loginsignup-message">
            <p>{messageText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
