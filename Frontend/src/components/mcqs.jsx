import React, { useState } from 'react';

const MultipleChoiceForm = ({ questions }) => {
  // State to keep track of the user's answers
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  // Handle answer selection
  const handleAnswerChange = (questionIndex, selectedOption) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: selectedOption
    });
  };

  // Handle quiz submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    let correctCount = 0;

    // Calculate the number of correct answers
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });

    // Set the score
    setScore(correctCount);
  };

  return (
    <div className='px-24 py-10'>
      <form onSubmit={handleSubmit}>
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

        {/* Submit Button */}
        <div className='flex justify-center pt-10'>
        <button
          type="submit"
          className='rounded-md h-auto px-6 py-1 border-2 border-black shadow-dark'>
          Submit
        </button>
        </div>
      </form>

      {/* Display the score after submission */}
      {score !== null && (
        <div className="mt-6 text-lg font-sourceSans">
          <p>You answered {score} out of {questions.length} questions correctly!</p>
        </div>
      )}
    </div>
  );
};

export default MultipleChoiceForm;
