import {Router} from "express";
import { verifyToken } from "../middlewares/authmiddleware.js";
import { getallstudentdata } from "../controllers/studentcontroller.js";
const studetroutes = Router();

studetroutes.post("/getquizdata",verifyToken,getallstudentdata)

export default studetroutes