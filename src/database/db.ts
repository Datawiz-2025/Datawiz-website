import mongoose from "mongoose";

export const connectDB = async() => {
    try{
        await mongoose.connect("");
        console.log("Database connected successfully");
    }catch(err){
        console.log(`MongoDB Connection error: ${err}`);
    }
}

