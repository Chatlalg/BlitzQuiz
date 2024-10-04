import React from 'react';
import { NavLink } from 'react-router-dom';
import generateIcon from "../assets/Logo/plus-sign.png";
import siteLogo from "../assets/Logo/black-logo.png";
import profileIcon from "../assets/Logo/profile1.png"
const Navbar = () => {
    return (
        <div className='w-auto h-auto bg-[#3FF4A1] flex py-2 font-sourceSans items-center justify-between px-12'>
            <img src={siteLogo} alt="logo" className='h-10 p-1'></img>
            <div className=' flex text-xl space-x-28 ml-24'>
                <NavLink to="/teacherdashboard/myquizzes" className={({ isActive }) => (isActive ? "font-bold" : "")}><p>My Quizzes</p></NavLink>
                <NavLink to="/teacherdashboard/myuploads" className={({ isActive }) => (isActive ? "font-bold" : "")}><p>My Uploads</p></NavLink>
                <NavLink to="/teacherdashboard/mystudents" className={({ isActive }) => (isActive ? "font-bold" : "")}><p>My Students</p></NavLink>
            </div>
            <div className='flex space-x-4'>
                <NavLink to="/teacherdashboard/myuploads">
                <div className='h-auto w-auto flex items-center space-x-1 bg-white rounded-2xl px-3 py-1'>
                    <img src={generateIcon} alt="generate icon" className='h-6'></img>
                    <p className='font-semibold'>Generate quiz</p>
                </div>
                </NavLink>
                <NavLink to="/teacherdashboard/profile">
                <div className='h-auto w-auto flex items-center bg-white rounded-2xl px-3'>
                    <img src={profileIcon} alt="profile" className='h-8 p-1'></img>
                    <p className='font-semibold'>Soham</p>
                </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar
