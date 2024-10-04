import { genSalt,hash } from "bcrypt";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({

    email:{
        required:[true,"Email is required"],
        type:String,
        unique:true

    },
    password:{
        required:[true,"password is required"],
        type:String,

    },
    username:{
        required:false,
        type:String,

    },
    
    role:{
        required:true,
        type:String,

    },
    userimage:{
        type:String
    },
   
    
})
userSchema.pre("save",async function (next) {
    const salt = await genSalt();
    this.password = await hash(this.password,salt);
    next();
})
const User = mongoose.model("Users",userSchema)
export default User