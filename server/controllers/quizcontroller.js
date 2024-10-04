import QuizAttempt from '../models/QuizAttempt.js';
import quiz from "../models/QuizModel.js";

export const submitquiz =async (req,res)=>{
    const studentemail=req.body.email;
    const quizid = req.body.quizid;
    const score = req.body.score;
    console.log(studentemail)
    console.log(quizid)
    console.log(score)
    const {email} = await quiz.findOne({quizid:quizid});
    const resp = await QuizAttempt.create({email:studentemail,quizid:quizid,score:score,createdby:email})
    res.status(200).json({
        message:"Quiz submitted Sucessfully"
    });

}