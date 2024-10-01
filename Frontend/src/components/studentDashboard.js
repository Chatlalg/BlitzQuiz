import React from 'react';
import siteLogo from "../assets/Logo/blitzquiz-logo-zip-file/logo-no-background.png";
import favicon from "../assets/Logo/favicon.png";
import profile from "../assets/Logo/userprofile.png";
import JoinQuiz from './joinquiz';
import { NavLink } from 'react-router-dom';

const StudentDashboard = () => {
  return (
    <div className="w-full h-full">
      {/* Navbar */}
      <div className="w-full flex justify-between px-16 py-4">
        <NavLink to="/studentDashboard">
          <img src={siteLogo} alt="logo" className="h-10 p-1" />
        </NavLink>

        <NavLink to="/studentDashboard/profile">
          <img src={profile} alt="profile" className="h-10 " />
        </NavLink>
      </div>

      <JoinQuiz/>
      
    </div>
  );
};

export default StudentDashboard;
