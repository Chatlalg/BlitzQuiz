import {Router} from "express";
import { generateQuiz, getQuiz, login, signup} from "../controllers/authcontroller.js";
import { verifyToken } from "../middlewares/authmiddleware.js";
import multer from "multer";
const authRoutes = Router();
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,"./uploads/docs")
    },
    filename: function(req,file,cb){
        return cb(null,`${Date.now()}_${file.originalname}`)
    }

});
const upload = multer({storage});

authRoutes.post("/signup",signup);
authRoutes.post("/login",login)
authRoutes.post("/generate_quiz",verifyToken,generateQuiz)
authRoutes.post("/get_quiz",verifyToken,getQuiz)

export default authRoutes