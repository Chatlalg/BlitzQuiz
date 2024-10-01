import React from "react";
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import siteLogo from "../assets/Logo/blitzquiz-logo-zip-file/logo-no-background.png";
import favicon from "../assets/Logo/favicon.png";
import dropdown from "../assets/Logo/dropdown.png";
import axios from 'axios';  
import { NavLink } from "react-router-dom";

function Register() {
  const navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target); 
    const accountType = formData.get('accountType');
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    
    try {
      // Post form data to the server 
      const response = await axios.post('http://localhost:4000/api/auth/signup', {
        role:accountType,
        username,
        email,
        password
      },{withCredentials:true});
      
      // If registration is successful, navigate to login page
      if (response.status === 200) {
        navigate('/login');  
      }
      
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="w-full h-full">
      {/* Logo */}
      <NavLink to="/">
      <img src={siteLogo} alt="logo" className="h-8 ml-24 mt-7" />
      </NavLink>
      
      {/* Register Outer Div */}
      <div className="w-full h-auto flex mt-10 justify-center">
        {/* Register Div */}
        <div className="relative bg-white h-[600px] min-w-[369px] flex flex-col items-center justify-around p-8 shadow-green-400 shadow-xl rounded-lg">
          {/* Header */}
          <div className="flex flex-col items-center">
            <img src={favicon} alt="logo" className="h-auto w-14 mb-1" />
            <p className="text-center font-semibold font-montserrat">Register</p>
            <p className="text-center text-sm font-montserrat text-gray-700">Please enter your details.</p>
          </div>

          {/* Input Fields */}
          <form onSubmit={handleSubmit} className="w-full h-auto">
            
            {/* Account Type Dropdown */}
            <div className="flex flex-col justify-start mb-2 relative">
              <label className="font-montserrat font-semibold text-sm mb-1" htmlFor="accountType">
                Account Type
              </label>
              <div className="relative">
                <select
                  id="accountType"
                  name="accountType"
                  className="appearance-none border-2 border-black rounded-lg p-2 min-w-[36px] min-h-[40px] w-full cursor-pointer"
                  required
                >
                  <option value="" disabled selected>Select account type</option>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
                {/* Dropdown Icon */}
                <img
                  src={dropdown}
                  alt="dropdown icon"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none"
                />
              </div>
            </div>

            {/* Username */}
            <div className="flex flex-col justify-start mb-2">
              <label className="font-montserrat font-semibold text-sm mb-1" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="border-2 border-black rounded-lg p-2 min-w-[36px] min-h-[40px]"
                placeholder="Enter your username"
                required
              />
            </div>

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
                required
              />
            </div>

            {/* Submit Button */}
            <input
              type="submit"
              value="Register"
              className="mt-5 bg-black text-white rounded-lg p-2 w-full min-h-[40px] cursor-pointer"
            />

          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
