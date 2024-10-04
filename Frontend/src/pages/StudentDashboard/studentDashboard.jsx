
import React, { useEffect, useState } from 'react';
import siteLogo from "../../assets/Logo/blitzquiz-logo-zip-file/logo-no-background.png";
import favicon from "../../assets/Logo/favicon.png";
import profile from "../../assets/Logo/userprofile.png";
import JoinQuiz from './join';
import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom';
import QuizCard from './quizCard';
// import Footer from "../../components/footer";
import { useLocation } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('auth-token');
        if (!token) {
          throw new Error('No token found');
        }
        // You can verify the token here if needed
      } catch (error) {
        navigate('/login');
      }
    };

    checkAuth();
  }, [navigate]);
  
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const authtoken = localStorage.getItem('auth-token');
        const response = await axios.post('http://localhost:4000/api/auth/getuserdata', 
          { authtoken }, 
          {
            headers: {
              'Content-Type': 'application/json' 
            },
            withCredentials: true 
          }
        );
        console.log(response.data);
        setUserData(response.data); 
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData(); 
  }, [location]);

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
        {loading ? (
          <h1 className='font-sourceSans text-3xl font-light'>Loading...</h1>
        ) : userData ? (
          <h1 className='font-sourceSans text-3xl font-light'>
            Welcome back, <span className="font-bold">{userData.username}</span>
          </h1>
        ) : (
          <h1 className='font-sourceSans text-3xl font-light'>
            Welcome back!
          </h1>
        )}
      </div>

      <JoinQuiz />

      {/* My Quizzes */}
      <div className='w-full h-auto'>
        {/* heading */}
        <div className='w-full h-10 flex justify-start space-x-1 pl-48 my-10'>
          <img src={favicon} alt="bullet point w-1 h-1"></img>
          <h1 className='font-montserrat font-bold text-3xl '>My Quizzes</h1>
        </div>

        {/* Quizzes */}
        <div className="flex justify-center">
          <div className='grid grid-cols-2 gap-2'>
            {userData ? (
              userData.allquiz.map((data, idx) => {
                return (
                  <QuizCard 
                    key={idx} 
                    title={"Web Development"} 
                    teacher={data.createdby} 
                    score={data.score} 
                    question={15} 
                  />
                )
              })
            ) : (
              <div>Loading quizzes...</div>
            )}
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default StudentDashboard;
