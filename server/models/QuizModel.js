import mongoose from "mongoose";
const quizschema = new mongoose.Schema({

    email:{
        required:true,
        type:String,
        

    },

    quizid:{
        required:true,
        type:Number
    },
    quizquestion:{
        required:true,
        type:String
    },
    quizanswer:{
        required:true,
        type:String
    },
    quiztopic:{
        type:String
    },
    quizdocument:{
        type:String
    },
    quizimage:{
        
        type:String
    },

    
})

const quiz = mongoose.model("Quiz",quizschema)
export default quiz