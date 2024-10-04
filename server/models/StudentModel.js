import mongoose from "mongoose";

const studentModel = new mongoose.Schema({
    email:{
        required:[true,"Email is required"],
        type:String,
        unique:true

    },
  
    username:{
        required:false,
        type:String,

    },
    userimage:{
        type:String
    },
    attemptedquiz:{
        type:[Number]
    }
   
    
   
    
 
})
const student = mongoose.model("student",studentModel)
export default student
