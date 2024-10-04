import { response } from "express";
import mongoose from "mongoose";
import User from "../models/userModel.js";
import quiz from "../models/QuizModel.js";
import QuizAttempt from '../models/QuizAttempt.js';
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
import axios from "axios";

const { sign } = jwt;
const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (email, role) => {
  return sign({ email, role }, process.env.JWT_KEY, {
    expiresIn: maxAge,
  });
};

export const signup = async (req, res, next) => {
  try {
    
    const { email, password, role, username } = req.body;
    console.log(req.body);
    if (!email || !password) {
      return res.status(400).send("Email and password is required");
    }
    const user = await User.create({ email, password, username, role });
    res.cookie("jwt", createToken(email,  role), {
      maxAge,
      // httpOnly: true,
      secure: false,
      sameSite: "None",
    });
    return res.status(200).json({
      role: user.role,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server error");
  }
};
export const login = async (req, res, next) => {
  try {
    console.log(req.body);
    const authtoken = req.body.authtoken;
    const { email, password, role } = req.body;
    console.log(email);
    console.log(password);
    if (!email || !password) {
      return res.status(400).send("Email and password is required");
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    const auth = await compare(password, user.password);
    if (!auth) {
      return res.status(400).send("Password is incorrect");
    }
    const token = createToken(email,user.role)
    res.cookie("jwt", token, {
      maxAge,
      // httpOnly: true,  
      secure: false,
      sameSite: "None",
    });
    const resp = await quiz.find({email:email});
    console.log(resp);

    const allquizesattempted = await QuizAttempt.find({email:email})
    console.log(allquizesattempted);
    
    
      return res.status(200).json({
        authtoken:token,
        email: user.email,
        username: user.username,
        userimage:user.userimage,
        alldata:resp,
        allquiz:allquizesattempted,

        role: user.role,
      });
    
    // else{
    //   return res.status(200).json({
      
    //     email: user.email,
    //     username: user.username,
    //     userimage:user.userimage,
    //     allquiz:allquizesattempted,
    //     role: user.role,
    //   });
    // }
    // return res.status(200).json({
    //   id: user._id,
    //   email: user.email,
    //   username: user.username,

    //   role: user.role,
    // });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server error");
  }
};
async function generateAndStoreUniqueId() {
  let quizid;

  do {
    quizid = Math.floor(10000 + Math.random() * 90000);
  } while (await quiz.findOne({ quizid }));

  return quizid;
}
export const generateQuiz = async (req, res) => {
  const topic = req.body.topic;
  const noqs = req.body.numbers
  console.log("inside generate quix");
  let inputString = "";
 const email = req.email;
 console.log("here is email",email)
  const response = await axios.post(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA3tKZqPRu9lO3gR2sNuzbCTNzeCSkl-7Q",
    {
      contents: [
        {
          parts: [
            {
              text: "Generate mcq quiz on computer with 5 questions out of given 4 options one should be correct. Response should be in JSON format with template {question_number:[question, option_1, option_2, option_3, option_4]}. Generate answers in JSON format with template {Question_number:[correct_option, index of correct option in question array]}",
            },
          ],
        },
      ],
    }
  );
  inputString = response["data"]["candidates"][0]["content"]["parts"][0];

  let fullstring = inputString["text"];
  console.log(typeof fullstring);

  const jsonParts = fullstring.match(/\{[\s\S]*?\}/g);

  if (jsonParts.length === 2) {
    // Step 2: Parse each part into JSON objects
    const quizQuestionsJson = JSON.parse(jsonParts[0]);
    const quizAnswersJson = JSON.parse(jsonParts[1]);

    // Step 3: Log or use the JSON objects
    console.log("Quiz Questions:", quizQuestionsJson);
    console.log("Quiz Answers:", quizAnswersJson);

    const uniqueId = await generateAndStoreUniqueId();
    console.log(uniqueId)
    if(uniqueId){
        const update = await quiz.create({email:email,quizquestion:jsonParts[0],quizanswer:jsonParts[1],quizid:uniqueId},  // options
        )
        console.log(update);
        
    }   
    else{
      console.error("Error generating ID:");
    res.status(500).json({ message: "Failed to generate ID" });
    } 
    return res.json({
      quizQuestionsJson,
      quizAnswersJson
    });
    
  } else {
    console.error("Couldn't extract the JSON parts correctly.");
    res.send("error")
  }

};

export const getQuiz = async (req,res)=>{
  const quizid = req.body.joinId;
  if(!quizid){
    return res.status(400).send("Quiz Id is required");

  }
  const resp = await quiz.findOne({quizid:quizid})
  if(!resp){
    return res.status(404).send("Invalid quiz Id")
  }
  const questions = JSON.parse(resp.quizquestion);
  const answers = JSON.parse(resp.quizanswer);
  res.status(200).json({
    questions,
    answers
  })
}

export const getuserdata = async (req, res, next) => {
  try {
    
    console.log("hiiiiii")
    const email = req.email
    console.log(email)
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    
    
    const resp = await quiz.find({email:email});
    console.log(resp);

    const allquizesattempted = await QuizAttempt.find({email:email})
    console.log(allquizesattempted);
    
    
      return res.status(200).json({
        email: user.email,
        username: user.username,
        userimage:user.userimage,
        alldata:resp,
        allquiz:allquizesattempted,

        role: user.role,
      });
    
    
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server error");
  }
};