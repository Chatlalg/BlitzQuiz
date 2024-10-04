import {Router} from "express";
import { verifyToken } from "../middlewares/authmiddleware.js";
import { getallteacherdata } from "../controllers/teachercontroller.js";
const teacherroutes = Router();

teacherroutes.post("/getquizdata",verifyToken,getallteacherdata)

export default teacherroutes
