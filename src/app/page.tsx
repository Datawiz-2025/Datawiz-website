import { connectDB } from "../database/db";
export default async function Home() {
  try{
    await connectDB();
    console.log("Database connected successfuly");
  }catch(err){
    console.log("Error connecting database: ", err);
  }
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
}
