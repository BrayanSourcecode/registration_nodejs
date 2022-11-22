
import mongoose from "mongoose";

  (async ()=>{
    
    try {
        const db = await mongoose.connect("mongodb://localhost:27017/registro2");
        console.log("db connect");
    } catch (error) {
        console.log(error);  
    }
   })();