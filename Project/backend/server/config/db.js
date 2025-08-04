const mongoose = require("mongoose");
const dbURL = process.env.dbURL;
const connectDB = async () =>{
    try{
        await mongoose.connect(dbURL , { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected to db");
    }catch(err){
        console.error(err);
        process.exit(1);
  
    }
}

module.exports = connectDB