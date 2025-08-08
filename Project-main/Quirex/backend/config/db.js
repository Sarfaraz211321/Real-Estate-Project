import mongoose from 'mongoose';
 export const dbConnect=async()=>{
  const conn=await mongoose.connect('mongodb://localhost:27017/Querix');
  if(conn){
    console.log("database has connected successfully....")
  }
} 