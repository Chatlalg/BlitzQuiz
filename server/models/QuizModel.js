import mongoose from "mongoose";
const userSchema = new mongoose.Schema({

    email:{
        required:[true,"Email is required"],
        type:String,
        unique:true

    },
    role:{
        required:true,
        type:String,

    },
    quizid:{
        required:true,
        type:Number
    },
    quizdata:{
        required:true,
        type:String
    }
    
})

const User = mongoose.model("Quiz",userSchema)
export default User