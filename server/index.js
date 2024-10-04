import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import authRoutes from "./routes/authroutes.js"
import teacherroutes from "./routes/teacherroutes.js"
import studetroutes from "./routes/studentroutes.js"
import quizroutes from "./routes/quizroutes.js"
dotenv.config()
const app = express()
const port = process.env.port
const mongoUrl = process.env.MONGO_URL
app.use(cors({
    origin:process.env.ORIGIN,
    methods:["GET","POST","PUT","DELETE","PATCH"],
     credentials: true,
}));    
app.use("/uploads/docs",express.static("uploads/docs"));
app.use(cookieParser());
app.use(express.json())

app.use('/api/auth',authRoutes)
app.use('/api/teacher',teacherroutes)
app.use('/api/student',studetroutes)
app.use('/api/quiz',quizroutes)
mongoose.connect(mongoUrl).then(()=>{
    console.log("Connected to Database Successfully");
    
})
const server = app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
})