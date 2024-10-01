import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';

const JoinQuiz = () => {
    const [joinId, setJoinId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/joinQuiz', {
                joinId,
            });
            console.log('Response:', response.data); 
        } catch (error) {
            console.error('Error joining quiz:', error);
        }
    };

    return (
        <div className="relative w-auto h-full flex justify-center">
            <div className="bg-green-400 p-6 rounded-lg shadow-lg ">
                <h3 className='font-sourceSans text-white text-3xl font-black shadow-header '>Join a Quiz!</h3>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    {/* Join ID */}
                    <div>
                        <input
                            type="text"
                            id="joinId"
                            value={joinId}
                            onChange={(e) => setJoinId(e.target.value)}
                            className=" rounded-lg p-2 w-full"
                            placeholder="Enter Join ID"
                            required
                        />
                    </div>

                    {/* Join Button */}
                    <button
                        type="submit"
                        className="bg-white font-black text-2xl text-black rounded-lg p-2 w-full cursor-pointer"
                    >
                        Join
                    </button>
                </form>
            </div>
        </div>
    );
}

export default JoinQuiz;
