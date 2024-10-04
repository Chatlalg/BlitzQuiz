import React, { useState,useEffect } from 'react';
import "../../index.css";
import MultipleChoiceForm from '../../components/mcqs';
import Footer from "../../components/footer"
import { useNavigate } from 'react-router';

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
  const quizname = "Web Development";
  const teachername = "Soham Joshi";
  const noqs = 15;

  const questions = [
    {
      questionText: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Markup Language"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      questionText: "What is the correct CSS syntax?",
      options: ["body:color=black;", "body {color: black;}", "{body:color=black;}", "body = color(black)"],
      correctAnswer: "body {color: black;}"
    },
    {
      questionText: "Inside which HTML element do we put the JavaScript?",
      options: ["<js>", "<script>", "<javascript>", "<scripting>"],
      correctAnswer: "<script>"
    }
  ];


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
      <MultipleChoiceForm questions={questions} />
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default GiveQuiz;
