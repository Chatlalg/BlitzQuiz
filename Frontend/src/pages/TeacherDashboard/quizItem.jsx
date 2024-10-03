import React from 'react'
import quizImage from "../../assets/Images/book.jpg"
import QuizTag from './quizTag'
import "../../index.css"

const QuizItem = (props) => {
  return (
    <div className='w-auto h-auto rounded-lg py-6 px-4 shadow-dark'>
      <div className='flex items-center'>
        <img src={quizImage} alt="quiz image" className='rounded-lg border-green-400 border-2 h-28'></img>
        <div className='w-full h-auto flex flex-col px-8 gap-4'>
          <div className='px-1'>
            <p className='text-lg font-bold'>{props.quiztopic}</p>
            <p>Questions: {props.questions}</p>
            <p>Attempted: {props.attempted}</p>
          </div>
          {/* Quiz tags */}
          <div className='w-full h-auto flex justify-between '>
            <QuizTag tagName={"Node"} />
            <QuizTag tagName={"Express"} />
            <QuizTag tagName={"React"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizItem
