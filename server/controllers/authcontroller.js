import { response } from "express";
import mongoose from "mongoose";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
import axios from "axios";
import { renameSync, unlinkSync } from "fs";
const { sign } = jwt;
const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (email, userId,role) => {
  return sign({ email, userId,role}, process.env.JWT_KEY, { expiresIn: maxAge });
};

export const signup = async (req, res, next) => {
  try {
    const { email, password,role,username } = req.body;
    console.log(req.body);
    if (!email || !password) {
      return res.status(400).send("Email and password is required");
    }
    const user = await User.create({ email, password,username,role });
    res.cookie("jwt", createToken(email, user._id,role), {
      maxAge,
      httpOnly: true,
      secure: false,
      sameSite: "None",
    });
    return res.status(200).json({
      role:user.role
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server error");
  }
};
export const login = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password,role } = req.body;
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
    res.cookie("jwt", createToken(email, user._id,user.role), {
      maxAge,
      httpOnly: true,
      secure: false,
      sameSite: "None",
    });
    return res.status(200).json({
      
        id: user._id,
        email: user.email,
        username: user.username,
      
      role:user.role
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server error");
  }
};

export const generateQuiz = async (req,res)=>{
  console.log("inside generate quix");
  let inputString = "";
  const response = await axios.post(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAIiO7mBLjMC-4mMkRBszTmtD4DAtm0fVs",
    {
      "contents": [
        {
          "parts": [
            {
              "text": "Generate mcq quiz on topic sports with 3 questions out of given 4 options one should be correct. Response should be in JSON format with template {question_number:[question, option_1, option_2, option_3, option_4]}. Generate answers in JSON format with template {Question_number:[correct_option, index of correct option in question array]}"
            }
          ]
        }
      ]
    }
  );
inputString = response['data']['candidates'][0]['content']['parts'][0];

let fullstring=inputString['text'];
console.log(typeof fullstring);


const jsonParts = fullstring.match(/\{[\s\S]*?\}/g); 

if (jsonParts.length === 2) {
  // Step 2: Parse each part into JSON objects
  const quizQuestionsJson = JSON.parse(jsonParts[0]);
  const quizAnswersJson = JSON.parse(jsonParts[1]);

  // Step 3: Log or use the JSON objects
  console.log("Quiz Questions:", quizQuestionsJson);
  console.log("Quiz Answers:", quizAnswersJson);
} else {
  console.error("Couldn't extract the JSON parts correctly.");


}
return res.send("ok")
}