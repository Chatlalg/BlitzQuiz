import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const GeneratePopUp = () => {
  const [numQuestions, setNumQuestions] = useState('');
  const [topics, setTopics] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Number of Questions:', numQuestions);
    // console.log('Topics:', topics);
    navigate('/teacherdashboard/generatedquiz');
  };

  return (
    <div className="fixed z-10 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Generate Quiz</h2>
        <form onSubmit={handleSubmit}>
          {/* Number of Questions */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numQuestions">
              Enter Number of Questions
            </label>
            <input
              id="numQuestions"
              type="number"
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Topics Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topics">
              Enter Topics
            </label>
            <input
              id="topics"
              type="text"
              value={topics}
              onChange={(e) => setTopics(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Generate Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-logo-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GeneratePopUp;
