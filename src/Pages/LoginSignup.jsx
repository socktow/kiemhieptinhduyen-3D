import React, { useState } from 'react';

const LoginSignup = () => {
  // State to toggle between login and signup
  const [isLogin, setIsLogin] = useState(true);

  // Handler to toggle between login/signup
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-6">{isLogin ? 'Login' : 'Sign Up'}</h2>
        
        {/* Login Form */}
        {isLogin ? (
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-semibold">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
              Login
            </button>
          </form>
        ) : (
          // Signup Form
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-semibold">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md">
              Sign Up
            </button>
          </form>
        )}

        {/* Toggle between login and signup */}
        <div className="mt-4 text-center">
          <button
            onClick={toggleForm}
            className="text-sm text-blue-600 hover:underline"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
