// // import React, { useState } from 'react';

// // const MultipleChoiceForm = ({ questions,answers }) => {
// //   // State to keep track of the user's answers
// //   console.log(questions)
// //   console.log(answers);
// //   const [updatedAnswers, setUserAnswers] = useState([]);
// //   const [score, setScore] = useState(null);
// //   const [isAllAnswered, setIsAllAnswered] = useState(false);
// //   // let updatedAnswers=[];
// //   // Handle answer selection
// //   const handleAnswerChange = (questionIndex, selectedOption) => {
// //     setUserAnswers([...updatedAnswers,questionIndex]);
// //     console.log(updatedAnswers)
// //     // setUserAnswers(updatedAnswers);

// //     // Check if all questions are answered
// //     if (updatedAnswers.length === questions.length) {
// //       setIsAllAnswered(true);
// //     }
// //   };

// //   // Handle quiz submission
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
    
// //     let correctCount = 0;

// //     // Calculate the number of correct answers
// //     for(let i=0;i<updatedAnswers.length;i++){
// //       if(updatedAnswers[i]==answers[i][1]){
// //         correctCount++;
// //       }
// //     }
   

// //     // Set the score
// //     setScore(correctCount);
// //   };

// //   return (
// //     <div className='px-24 py-10'>
// //       <form onSubmit={handleSubmit}>
// //         {questions.length > 0 ? (
// //           questions.map((question, index) => (
// //             <div key={index} className='mb-6 flex flex-col gap-2'>
// //               <p className='font-sourceSans text-xl font-medium'>{index + 1}. {question[0]}</p>
// //               <div className='flex flex-col gap-4'>
// //                 {question.slice(1).map((option, idx) => (
// //                   <label key={idx} className='font-sourceSans text-xl'>
// //                     <input
// //                       type="radio"
// //                       name={`question-${index}`}
// //                       value={option}
// //                       className='mr-2'
// //                       onChange={() => handleAnswerChange(index, option)}
// //                     />
// //                     {option}
// //                   </label>
// //                 ))}
               
// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <p>Loading questions...</p>
// //         )}

// //         {/* Submit Button */}
// //         <div className='flex justify-center pt-10'>
// //           <button
// //             type="submit"
// //             className={`rounded-md h-auto px-6 py-1 border-2 border-black shadow-dark ${
// //               !isAllAnswered ? 'opacity-50 cursor-not-allowed' : ''
// //             }`}
// //             disabled={!isAllAnswered}
// //           >
// //             Submit
// //           </button>
// //         </div>
// //       </form>

// //       {/* Display message if not all questions are answered */}
// //       {!isAllAnswered && (
// //         <div className="mt-4 text-red-500 text-center">
// //           <p>Please answer all questions before submitting the quiz.</p>
// //         </div>
// //       )}

// //       {/* Display the score after submission */}
// //       {score !== null && (
// //         <div className="mt-6 text-lg font-sourceSans text-center">
// //           <p>You answered {score} out of {questions.length} questions correctly!</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default MultipleChoiceForm;
// import React, { useState } from 'react';
// import axios from "axios"
// const MultipleChoiceForm = ({ questions, answers,alluserinfo,quizid }) => {
//   let correctCount = 0;
//   console.log(questions)
//   console.log(answers)
//   console.log("userinfoare ",alluserinfo)
//   console.log("quizid ",quizid)
//   // State to keep track of the user's answers
//   const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null)); // Initialize userAnswers with null
//   const [score, setScore] = useState(null);
//   const [isAllAnswered, setIsAllAnswered] = useState(false);

//   // Handle answer selection
//   const handleAnswerChange = (questionIndex, selectedOption) => {
//     const updatedAnswers = [...userAnswers]; // Create a copy of the userAnswers array
//     updatedAnswers[questionIndex] = selectedOption; // Update the selected answer for the specific question
//     setUserAnswers(updatedAnswers); // Set the updated answers state

//     // Check if all questions are answered
//     const allAnswered = updatedAnswers.every(answer => answer !== null);
//     setIsAllAnswered(allAnswered);
//   };

//   // Handle quiz submission
//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     const authtoken = localStorage.getItem('auth-token');
//     const resp = await axios.post("http://localhost:4000/api/quiz/submitquiz",{
//       authtoken:authtoken,
//         email:alluserinfo.email,
//         quizid:quizid,
//         score:score

//     })
//     // let correctCount = 0;

//     // Calculate the number of correct answers
//     for (let i = 0; i < userAnswers.length; i++) {
//       // Check if the user's answer matches the correct answer (index in answers)
//       if (userAnswers[i] === answers[i][0]) { // Compare with the answer text
//         correctCount++;
//       }
//     }

//     // Set the score
//     setScore(correctCount);
//   };

//   return (
//     <div className='px-24 py-10'>
//       <form onSubmit={handleSubmit}>
//         {questions.length > 0 ? (
//           questions.map((question, index) => (
//             <div key={index} className='mb-6 flex flex-col gap-2'>
//               <p className='font-sourceSans text-xl font-medium'>{index + 1}. {question[0]}</p>
//               <div className='flex flex-col gap-4'>
//                 {question.slice(1).map((option, idx) => (
//                   <label key={idx} className='font-sourceSans text-xl'>
//                     <input
//                       type="radio"
//                       name={`question-${index}`}
//                       value={option}
//                       className='mr-2'
//                       onChange={() => handleAnswerChange(index, option)}
//                     />
//                     {option}
//                   </label>
//                 ))}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Loading questions...</p>
//         )}

//         {/* Submit Button */}
//         <div className='flex justify-center pt-10'>
//           <button
//             type="submit"
//             className={`rounded-md h-auto px-6 py-1 border-2 border-black shadow-dark ${
//               !isAllAnswered ? 'opacity-50 cursor-not-allowed' : ''
//             }`}
//             onClick={handleSubmit}
//             disabled={!isAllAnswered}
//           >
//             Submit
//           </button>
//         </div>
//       </form>

//       {/* Display message if not all questions are answered */}
//       {!isAllAnswered && (
//         <div className="mt-4 text-red-500 text-center">
//           <p>Please answer all questions before submitting the quiz.</p>
//         </div>
//       )}

//       {/* Display the score after submission */}
//       {score !== null && (
//         <div className="mt-6 text-lg font-sourceSans text-center">
//           <p>You answered {score} out of {questions.length} questions correctly!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MultipleChoiceForm;
import React, { useState } from 'react';
import axios from "axios";

const MultipleChoiceForm = ({ questions, answers, alluserinfo, quizid }) => {
  console.log(questions);
  console.log(answers);
  console.log("userinfo are ", alluserinfo);
  console.log("quizid ", quizid);
  
  // State to keep track of the user's answers
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null)); // Initialize userAnswers with null
  const [score, setScore] = useState(null);
  const [isAllAnswered, setIsAllAnswered] = useState(false);

  // Handle answer selection
  const handleAnswerChange = (questionIndex, selectedOption) => {
    const updatedAnswers = [...userAnswers]; // Create a copy of the userAnswers array
    updatedAnswers[questionIndex] = selectedOption; // Update the selected answer for the specific question
    setUserAnswers(updatedAnswers); // Set the updated answers state

    // Check if all questions are answered
    const allAnswered = updatedAnswers.every(answer => answer !== null);
    setIsAllAnswered(allAnswered);
  };

  // Handle quiz submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let correctCount = 0;

    // Calculate the number of correct answers
    for (let i = 0; i < userAnswers.length; i++) {
      // Check if the user's answer matches the correct answer (index in answers)
      if (userAnswers[i] === answers[i][0]) { // Compare with the answer text
        correctCount++;
      }
    }

    // Set the score
    setScore(correctCount);

    // Send the score through a POST request
    const authtoken = localStorage.getItem('auth-token');
    try {
      const response = await axios.post("http://localhost:4000/api/quiz/submitquiz", {
        authtoken: authtoken,
        email: alluserinfo.email,
        quizid: quizid,
        score: correctCount // Use the calculated score
      });

      console.log("Score submitted:", response.data);
    } catch (error) {
      console.error("Error submitting score:", error);
    }
  };

  return (
    <div className='px-24 py-10'>
      <form onSubmit={handleSubmit}>
        {questions.length > 0 ? (
          questions.map((question, index) => (
            <div key={index} className='mb-6 flex flex-col gap-2'>
              <p className='font-sourceSans text-xl font-medium'>{index + 1}. {question[0]}</p>
              <div className='flex flex-col gap-4'>
                {question.slice(1).map((option, idx) => (
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
            className={`rounded-md h-auto px-6 py-1 border-2 border-black shadow-dark ${
              !isAllAnswered ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!isAllAnswered}
          >
            Submit
          </button>
        </div>
      </form>

      {/* Display message if not all questions are answered */}
      {!isAllAnswered && (
        <div className="mt-4 text-red-500 text-center">
          <p>Please answer all questions before submitting the quiz.</p>
        </div>
      )}

      {/* Display the score after submission */}
      {score !== null && (
        <div className="mt-6 text-lg font-sourceSans text-center">
          <p>You answered {score} out of {questions.length} questions correctly!</p>
        </div>
      )}
    </div>
  );
};

export default MultipleChoiceForm;
