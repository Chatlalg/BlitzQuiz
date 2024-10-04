import mongoose from "mongoose";

const quizattemptschema = new mongoose.Schema({
    email:{
        type:String
    },
    quizid:{
        type:Number
    },
    score:{
        type:Number
    },
    createdby:{
        type:String
    }
})
const QuizAttempt = mongoose.model("quizattempt",quizattemptschema)
export default QuizAttempt