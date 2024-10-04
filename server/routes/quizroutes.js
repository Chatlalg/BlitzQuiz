import {Router} from "express";
import { verifyToken } from "../middlewares/authmiddleware.js";
import { submitquiz } from "../controllers/quizcontroller.js";
const quizroutes = Router();

quizroutes.post("/submitquiz",verifyToken,submitquiz)

export default quizroutes