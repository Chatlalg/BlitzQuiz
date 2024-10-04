//student dashboard
import React,{useEffect} from 'react';
import siteLogo from "../../assets/Logo/blitzquiz-logo-zip-file/logo-no-background.png";
import favicon from "../../assets/Logo/favicon.png";
import profile from "../../assets/Logo/userprofile.png";
import JoinQuiz from './join';
import { NavLink, useNavigate } from 'react-router-dom';
import QuizCard from './quizCard';
import Footer from "../../components/footer";
const StudentDashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('auth-token'); // or fetch the JWT from cookies
        if (!token) {
          throw new Error('No token found');
        }

        // Optionally, verify the token by making an API call
        // await axios.get('/api/auth/verify-token', {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // });
      } catch (error) {
        // If token is invalid or not found, redirect to login
        navigate('/login');
      }
    };

    checkAuth();
  }, [navigate]);
  return (
    <div className="w-full h-full flex flex-col items-center">
      {/* Navbar */}
      <div className="w-full flex justify-between px-16 pt-4 pb-3">
        <NavLink to="/studentdashboard">
          <img src={siteLogo} alt="logo" className="h-10 p-1" />
        </NavLink>

        <NavLink to="/studentdashboard/profile">
          <img src={profile} alt="profile" className="h-10 " />
        </NavLink>
      </div>

      <div className='w-full h-auto px-16 pb-10'>
        <h1 className='font-sourceSans text-3xl font-light'>Welcome back, <span className="font-bold">Soham!</span></h1>
      </div>

      <JoinQuiz />

      My Quizzes
      <div className='w-full h-auto'>
        {/* heading */}
        <div className='w-full h-10 flex justify-start space-x-1 pl-48 my-10'>
          <img src={favicon} alt="bullet point w-1 h-1"></img>
          <h1 className='font-montserrat font-bold text-3xl '>My Quizzes</h1>
        </div>

        {/* Quizzes */}
        <div className="flex justify-center">
          <div className='grid grid-cols-2 gap-2'>
            <QuizCard key={1} title={"Web Development"} teacher={"Sajo"} score={80} question={15} />
            <QuizCard key={2} title={"Web Development"} teacher={"Sajo"} score={80} question={15} />
            <QuizCard key={3} title={"Web Development"} teacher={"Sajo"} score={80} question={15} />
            <QuizCard key={4} title={"Web Development"} teacher={"Sajo"} score={80} question={15} />
            <QuizCard key={3} title={"Web Development"} teacher={"Sajo"} score={80} question={15} />
            <QuizCard key={4} title={"Web Development"} teacher={"Sajo"} score={80} question={15} />
            <QuizCard key={3} title={"Web Development"} teacher={"Sajo"} score={80} question={15} />
            <QuizCard key={4} title={"Web Development"} teacher={"Sajo"} score={80} question={15} />
            <QuizCard key={2} title={"Web Development"} teacher={"Sajo"} score={80} question={15} />
            <QuizCard key={3} title={"Web Development"} teacher={"Sajo"} score={80} question={15} />
            <QuizCard key={4} title={"Web Development"} teacher={"Sajo"} score={80} question={15} />
            <QuizCard key={3} title={"Web Development"} teacher={"Sajo"} score={80} question={15} />
            <QuizCard key={4} title={"Web Development"} teacher={"Sajo"} score={80} question={15} />
            <QuizCard key={3} title={"Web Development"} teacher={"Sajo"} score={80} question={15} />
            <QuizCard key={4} title={"Web Development"} teacher={"Sajo"} score={80} question={15} />
          </div>
        </div>
      </div>
{/* 
      <Footer/> */}
    </div>
  );
};

export default StudentDashboard;
