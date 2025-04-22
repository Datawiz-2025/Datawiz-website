import mongoose from "mongoose";

export const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://datawiz:datawiz@datawiz.agkzucm.mongodb.net/datawiz?retryWrites=true&w=majority&appName=datawiz");
        console.log("Database connected successfully");
    }catch(err){
        console.log(`MongoDB Connection error: ${err}`);
    }
}

