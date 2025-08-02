const mongoose = require('mongoose');
const dbURL= "mongodb+srv://priyankvarshney884:IAReOQ6IFDJ1GKYF@cluster0.vqpjlmo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(dbURL).then((data) => {
    console.log("Connected to MongoDB successfully", data);
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});