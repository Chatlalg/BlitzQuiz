import React from "react";
import Hero from "./components/hero";
import Login from "./components/login";
import Register from "./components/register";
import StudentDashboard from "./components/studentDashboard";
import Profile from "./components/profile";
import GiveQuiz from "./components/giveQuiz";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/studentDashboard" element={<StudentDashboard/>}/>
          <Route path="/studentDashboard/profile" element={<Profile/>}/>
          <Route path="/studentDashboard/quiz" element={<GiveQuiz/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
