// require('dotenv').config({path:"./env"})
import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path:"./env",
})


connectDB()











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