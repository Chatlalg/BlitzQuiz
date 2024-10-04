import React from 'react';
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Topbar from './topbar';
import QuizItem from './quizItem';

const MyQuizzes = () => {
  return (
    <div className='w-full h-full '>
        <Navbar/>
        <Topbar/>
        <div className='w-full h-auto grid grid-cols-2 px-28 gap-4 mb-12'>
          <QuizItem key={1} quiztopic={"Web Development"} questions={10} attempted={80}/>
          <QuizItem key={2} quiztopic={"Web Development"} questions={10} attempted={80}/>
          <QuizItem key={3} quiztopic={"Web Development"} questions={10} attempted={80}/>
          <QuizItem key={4} quiztopic={"Web Development"} questions={10} attempted={80}/>
          <QuizItem key={5} quiztopic={"Web Development"} questions={10} attempted={80}/>
          <QuizItem key={6} quiztopic={"Web Development"} questions={10} attempted={80}/>
          <QuizItem key={7} quiztopic={"Web Development"} questions={10} attempted={80}/>
        </div>
        <Footer/>
    </div>
  )
}

export default MyQuizzes
