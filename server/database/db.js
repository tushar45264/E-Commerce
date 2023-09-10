import mongoose from "mongoose";

export const connection = async(userName,password)=>{
    const URL=`mongodb+srv://${userName}:${password}@cluster0.g3pu0lj.mongodb.net/PROJECT0?retryWrites=true&w=majority`;
    try {
       await mongoose.connect(URL,{useUnifiedTopology:true, useNewurlParser:true})
       console.log("Database connected successfully");
    } catch (error){
        console.log("error",error.message);
    }
} 

export default connection;