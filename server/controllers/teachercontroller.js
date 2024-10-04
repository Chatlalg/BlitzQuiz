 import quiz from "../models/QuizModel.js";
 import User from "../models/userModel.js";


export const getallteacherdata = async (req,res)=>{
    const email = req.email
    
    const resp = await quiz.find({email:email});
    const teacher = await User.findOne({email:email})
    console.log(resp);
    res.status(200).json({
        username:teacher.username,
        userimage:teacher.userimage,
        email:teacher.userimage,
        alldata:resp
    })
}