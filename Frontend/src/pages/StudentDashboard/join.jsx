// Join quiz component which will be displayed on student dashboard for joining the quiz

import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import '../../index.css';

const JoinQuiz = () => {
    const [joinId, setJoinId] = useState('');
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/studentdashboard/quiz')
        // try {
        //     const response = await axios.post('http://localhost:4000/joinQuiz', {
        //         joinId,
        //     },{withCredentials:true});

        //     if(response.status===200){
        //         navigate('/studentdashboard/quiz');
        //     }
        //     else{
        //         console.log('Invalid Quiz code');
        //     }
        
        //     console.log('Response:', response.data);
        // } catch (error) {
        //     console.error('Error joining quiz:', error);
        // }
    };

    return (
        <div className="relative w-9/12 h-auto">
            
            <div className="w-full 
            bg-gradient-to-b from-[#34D399] to-[rgba(0,157,86,0.3)] px-10 pb-8 rounded-lg">
                <h3 className='font-sourceSans text-white text-center text-4xl py-7 font-black shadow-header '>Join a Quiz!</h3>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                    {/* Join ID */}
                    <div className='bg-white rounded-lg drop-shadow-2xl shadow-black'>
                        <input
                            type="text"
                            id="joinId"
                            value={joinId}
                            onChange={(e) => setJoinId(e.target.value)}
                            className=" rounded-lg p-2 w-full h-24 text-center text-3xl font-bold focus:outline-none"
                            placeholder="Enter Quiz Code"
                            required
                        />
                    </div>

                    {/* Join Button */}
                    <button
                        type="submit"
                        className="bg-white font-sourceSans font-extrabold text-3xl drop-shadow-2xl shadow-black text-black rounded-lg p-3 w-full autocursor-pointer "
                    >
                        Join
                    </button>
                </form>
            </div>
        </div>
    );
}

export default JoinQuiz;
