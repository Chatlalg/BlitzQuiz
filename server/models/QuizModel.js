import mongoose from "mongoose";
const userSchema = new mongoose.Schema({

    email:{
        required:[true,"Email is required"],
        type:String,
        unique:true

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
    }
    
})

const User = mongoose.model("Quiz",userSchema)
export default User