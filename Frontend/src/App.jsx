import React from "react";
import Hero from "./pages/hero";
import Login from "./pages/login";
import Register from "./pages/register";
import StudentDashboard from "./pages/StudentDashboard/studentDashboard";
import StudentProfile from "./pages/StudentDashboard/studentProfile";
import GiveQuiz from "./pages/StudentDashboard/giveQuiz";
import MyQuizzes from "./pages/TeacherDashboard/myQuizzes";
import MyUploads from "./pages/TeacherDashboard/myUploads";
import MyStudents from "./pages/TeacherDashboard/myStudents";
import TeacherProfile from "./pages/TeacherDashboard/teacherProfile";
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import GeneratedQuiz from "./pages/TeacherDashboard/generatedQuiz";
function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/studentdashboard" element={<StudentDashboard/>}/>
          <Route path="/studentdashboard/profile" element={<StudentProfile/>}/>
          <Route path="/studentdashboard/quiz" element={<GiveQuiz/>}/>
          <Route path="/teacherdashboard/myquizzes" element={<MyQuizzes/>}/>
          <Route path="/teacherdashboard/" element={<MyQuizzes/>}/>
          <Route path="/teacherdashboard/myuploads" element={<MyUploads/>}/>
          <Route path="/teacherdashboard/mystudents" element={<MyStudents/>}/>
          <Route path="/teacherdashboard/profile" element={<TeacherProfile/>}/>
          <Route path="/teacherdashboard/generatedquiz" element={<GeneratedQuiz/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
