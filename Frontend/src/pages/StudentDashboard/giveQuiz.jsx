import React, { useState,useEffect } from 'react';
import "../../index.css";
import MultipleChoiceForm from '../../components/mcqs';
import Footer from "../../components/footer"
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import axios from "axios"

const GiveQuiz = () => {
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
  const location = useLocation(); 
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
const { quizData } = location.state || {};
const { alluserinfo } = location.state || {};
const{quizid}=location.state || {};
console.log("quizid",quizid)
console.log("iam printing all useringo",alluserinfo)
console.log(quizData);
let questionarray=[];
let correctanswer=[];
for(let key in quizData.questions){
  // console.log(quizData.questions.key)
  // console.log(quizData.questions[key])
  questionarray.push(quizData.questions[key])
}
for(let key in quizData.answers){
  // console.log(quizData.questions.key)
  // console.log(quizData.questions[key])
  correctanswer.push(quizData.answers[key])
}
// console.log(questionarray)
// console.log(correctanswer)
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
              );    console.log(response.data)
        setUserData(response.data); 
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData(); 
  }, [location]);
  
  const quizname = "Web Development";
  const teachername = "Soham Joshi";
  const noqs = 15;

  // const questions = [
  //   {
  //     questionText: "What does HTML stand for?",
  //     options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Markup Language"],
  //     correctAnswer: "Hyper Text Markup Language"
  //   },
  //   {
  //     questionText: "What is the correct CSS syntax?",
  //     options: ["body:color=black;", "body {color: black;}", "{body:color=black;}", "body = color(black)"],
  //     correctAnswer: "body {color: black;}"
  //   },
  //   {
  //     questionText: "Inside which HTML element do we put the JavaScript?",
  //     options: ["<js>", "<script>", "<javascript>", "<scripting>"],
  //     correctAnswer: "<script>"
  //   }
  // ];


  return (
    <div>
      {/* Topbar */}
      <div className='w-full h-auto bg-logo-green pt-20'>
        {/* Title, quiz-by, noqs */}
        <div className="font-montserrat flex flex-col items-start text-white px-24 pb-4">
          <p className="font-extrabold text-5xl">{quizname}</p>
          <p className='text-xl font-light px-2'>Quiz by: {teachername}</p>
          <p className='text-xl font-light px-2'>{noqs} Questions</p>
        </div>
      </div>

      {/* Quiz */}
      <div className='w-full h-auto pl-24'>
      <MultipleChoiceForm questions={questionarray} answers={correctanswer} alluserinfo={alluserinfo} quizid={quizid}/>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default GiveQuiz;
