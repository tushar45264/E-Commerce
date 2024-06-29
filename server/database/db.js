import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
export const connection = async(userName,password)=>{
    const URL = process.env.MONGO_URL;
    
    try {
       await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true})
       console.log("Database connected successfully");
    } catch (error){
        console.log("error",error.message);
    }
} 

export default connection;