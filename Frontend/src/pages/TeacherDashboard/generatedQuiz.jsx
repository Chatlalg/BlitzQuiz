import React from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import GiveQuiz from '../StudentDashboard/giveQuiz'
import MultipleChoiceForm from '../../components/mcqs'
import GeneratedQuestions from './generatedQuestions'
import Topbar from './topbar'

const GeneratedQuiz = () => {
    const questions = [
        {
            questionText: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Markup Language"],
            correctAnswer: "Hyper Text Markup Language"
        },
        {
            questionText: "What is the correct CSS syntax?",
            options: ["body:color=black;", "body {color: black;}", "{body:color=black;}", "body = color(black)"],
            correctAnswer: "body {color: black;}"
        },
        {
            questionText: "Inside which HTML element do we put the JavaScript?",
            options: ["<js>", "<script>", "<javascript>", "<scripting>"],
            correctAnswer: "<script>"
        }
    ];
    return (
        <div className='w-full h-auto'>
            <Navbar />
            <Topbar/>
            <GeneratedQuestions questions={questions}/>
            <Footer />
        </div>
    )
}

export default GeneratedQuiz
