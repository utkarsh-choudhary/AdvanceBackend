// require('dotenv').config({path:"./env"})
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({
    path:"./env",
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at ${process.env.PORT}`)
    })
    
})
.catch((err)=>{
    console.log("Mongodb connection failed",err)
})











/*
const app=express();
const PORT=process.env.PORT || 8001

;( async()=>{
   try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",(error)=>{
        console.log("unable to talk with express ",error);
        throw error;
    })
    app.listen(PORT,()=>{
        console.log(`Server started at port: ${PORT}`)
    })

   } catch (error) {
    console.error("ERROR: ",error);
    throw error
   }
})()
   */