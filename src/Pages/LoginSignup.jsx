import React, { useState } from "react";
import { Button, message, Checkbox } from "antd";
import api from "../Api/api";
import { useDispatch } from "react-redux";
import { fetchUserInfo } from "../Redux/UserSlice"; 
import "./LoginSignup.scss";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

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
    if (
      state === "Sign up" &&
      (!formData.email || formData.password !== formData.confirmPassword)
    ) {
      message.error(
        !formData.email
          ? "Email is required"
          : "Passwords do not match"
      );
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    setLoading(true);

    try {
      const data = await api.login(formData.username, formData.password);
      message.success("Login successful!");
      setLoading(false);
      localStorage.setItem("token", data.token);
      dispatch(fetchUserInfo(formData.username));
    } catch (error) {
      message.error(
        error.response?.data?.errors || "Login failed. Please try again."
      );
      setLoading(false);
    }
  };

  const handleSignup = async () => {
    if (!validateForm()) return;

    const checkbox = document.querySelector(
      '.loginsignup-agree input[type="checkbox"]'
    );
    if (!checkbox?.checked) {
      message.error(
        "You must agree to the Terms of Service and Privacy Policy to sign up."
      );
      return;
    }

    setLoading(true);
    try {
      await api.register(
        formData.username,
        formData.email,
        formData.password
      );
      message.success("Sign up successful! Please verify your email to log in.");
      setLoading(false);
      setState("Login");
    } catch (error) {
      message.error(
        error.response?.data?.errors || "Sign up failed. Please try again."
      );
      setLoading(false);
    }
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
            placeholder="Username"
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
          style={{
            width: "100%",
            marginTop: "20px",
            height: "50px",
            fontSize: "16px",
            textTransform: "uppercase",
          }}
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
      </div>
    </div>
  );
};

export default LoginSignup;
