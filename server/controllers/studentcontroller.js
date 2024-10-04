import User from "../models/userModel.js";
import QuizAttempt from '../models/QuizAttempt.js';
export const getallstudentdata = async(req,res)=>{
    const email = req.body.email
    const allquizesattempted = await QuizAttempt.find({email:email})
    const student = await User.findOne({email:email})
    res.json({
        userimage:student.userimage,
        username:student.username,
        email:student.email,
        allquiz:allquizesattempted
    })
}