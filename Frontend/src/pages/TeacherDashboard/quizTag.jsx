import React from 'react'
import "../../index.css"
const QuizTag = ({tagName}) => {
  return (
    <div className='w-auto h-full rounded-2xl border-2 border-green-400 flex justify-center items-center px-10 '>
      <p className='font-sourceSans text-sm font-semibold'>{tagName}</p>
    </div>
  )
}

export default QuizTag
