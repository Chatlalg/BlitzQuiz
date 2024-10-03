import React from 'react'
import "../../index.css"
import defaultPhoto from "../../assets/Logo/default-photo.jpg"
const StudentCard = (props) => {
    return (
        <div className='min-w-4/12'>
            <div className='w-full h-auto rounded-lg py-6 gap-8 px-4 shadow-dark flex font-sourceSans'>
                <img src={defaultPhoto} alt="user photo" className='rounded-lg h-20'></img>
                <div className='flex flex-col justify-center gap-0.5'>
                    <p>{props.studentname}</p>
                    <p>Attempted Quizzes: {props.attempted}</p>
                    <p>Average Score: {props.avgscore}%</p>
                </div>
            </div>
        </div>
    )
}

export default StudentCard
