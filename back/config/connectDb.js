const mongoose = require("mongoose");

const connectDB=async ()=> {
   try {

         await mongoose.connect(process.env.DB_URl,{useUnifiedTopology: true ,useNewUrlParser: true, });
       console.log('Data base is connected')    
    }
    
    
     catch (error) {
        console.log('database is not connected' , error);
        
    }
   

}
module.exports=connectDB;