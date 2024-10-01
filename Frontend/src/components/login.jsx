import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import siteLogo from "../assets/Logo/blitzquiz-logo-zip-file/logo-no-background.png";
import favicon from "../assets/Logo/favicon.png";
import { NavLink } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      
      const response = await axios.post('http://localhost:4000/api/auth/login', {
        email,
        password
      },{withCredentials:true});
      console.log(response.data)
      if (response.data.role === 'student' || response.data.role === 'Student') {
        navigate('/studentDashboard');
      } else if (response.data.role === 'teacher' || response.data.role === 'Teacher') {
        navigate('/teacherDashboard');
      } else {
        console.log('Unknown role received from server');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="w-full h-full">
      {/* Logo */}
      <NavLink to="/">
      <img src={siteLogo} alt="logo" className="h-8 ml-24 mt-7" />
      </NavLink>
      {/* Login Outer Div */}
      <div className="w-full h-auto flex mt-20 justify-center">
        {/* Login Div */}
        <div className="relative bg-white h-[470px] min-w-[369px] flex flex-col items-center justify-around p-8 shadow-green-400 shadow-2xl rounded-lg">
          {/* Header */}
          <div className="flex flex-col items-center">
            <img src={favicon} alt="logo" className="h-auto w-14 mb-4" />
            <p className="text-center font-semibold font-montserrat">Welcome back</p>
            <p className="text-center text-sm font-montserrat text-gray-700">Please enter your details to sign in.</p>
          </div>

          {/* Input Fields */}
          <form onSubmit={handleSubmit} className="w-full h-auto">
            {/* Email Field */}
            <div className="flex flex-col justify-start mb-2">
              <label className="font-montserrat font-semibold text-sm mb-1" htmlFor="email">
                E-mail Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-2 border-black rounded-lg p-2 min-w-[36px] min-h-[40px]"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col justify-start mb-2">
              <label className="font-montserrat font-semibold text-sm mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border-2 border-black rounded-lg p-2 min-w-[36px] min-h-[40px]"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <input
              type="submit"
              value="Sign in"
              className="mt-10 bg-black text-white rounded-lg p-2 w-full min-h-[40px] cursor-pointer"
            />

            {/* Signup Link */}
            <div className="flex justify-center pt-2">
              <NavLink to="/register" className="font-montserrat text-gray-700 text-sm">
                Don't have an account yet? <span className="text-black font-bold hover:underline">Sign Up</span>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
