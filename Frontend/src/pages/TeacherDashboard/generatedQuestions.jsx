import React, { useState } from 'react';
import { useNavigate } from 'react-router';
const GeneratedQuestions = ({ questions }) => {
    const navigate=useNavigate();
    const [userAnswers, setUserAnswers] = useState({});
    const handleAnswerChange = (questionIndex, selectedOption) => {
        setUserAnswers({
            ...userAnswers,
            [questionIndex]: selectedOption
        });
    };

    const handleSave = (e) => {
        e.preventDefault();
        navigate("/teacherdashboard/myquizzes")
    };

    return (
        <div className='px-24 py-10 '>
            <form onSubmit={handleSave}>
                {questions.length > 0 ? (
                    questions.map((question, index) => (
                        <div key={index} className='mb-6 flex flex-col gap-2'>
                            <p className='font-sourceSans text-xl font-medium'>{index + 1}. {question.questionText}</p>
                            <div className='flex flex-col gap-4'>
                                {question.options.map((option, idx) => (
                                    <label key={idx} className='font-sourceSans text-xl'>
                                        <input
                                            type="radio"
                                            name={`question-${index}`}
                                            value={option}
                                            className='mr-2'
                                            onChange={() => handleAnswerChange(index, option)}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading questions...</p>
                )}

                {/* Save Button */}
                <div className='flex justify-center pt-10'>
                    <button
                        type="submit"
                        className="rounded-md h-auto px-6 py-1 border-2 border-black shadow-dark"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default GeneratedQuestions;
