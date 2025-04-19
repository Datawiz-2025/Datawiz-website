import mongoose from "mongoose";

export const connectDB = async() => {
    try{
        await mongoose.connect(process.env.DATABASE_URL!);
        console.log("Database connected successfully");
    }catch(err){
        console.log(`MongoDB Connection error: ${err}`);
    }
}

