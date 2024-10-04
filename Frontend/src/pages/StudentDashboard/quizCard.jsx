// card for student's past quizzes which will be displayed under "My Quizzes" of student dashboard

import React from 'react';
import pass from "../../assets/Logo/pass.png";
import quizImg from "../../assets/Logo/quiz.png";
import "../../index.css";

const QuizCard = (props) => {
  return (
    <div className=' w-[570px] p-2 shadow-dark  rounded-lg flex items-center justify-between px-5'>
        <div className='flex space-x-6'>
        <img src={quizImg} alt="quiz image" className="h-24"></img>
        <div className='flex flex-col font-montserrat justify-center text-base leading-snug '>
            <p className='font-extrabold '>{props.title}</p>
            <p className=' '>Teacher: {props.teacher}</p>
            <p className=' '>Score: {props.score}</p>
            <p className=' '>{props.question} Q</p>
        </div>
        </div>
        <img src={pass} alt="test passed" className='w-18 h-16'></img>
    </div>
  )
}

export default QuizCard
