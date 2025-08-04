const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config(); //load .env variables into process.env object
// console.log(process.env);

const connectDB = require("./config/db");
const userRouter = require("./routes/userRoute");

connectDB();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Content-Type"],
    credentials: true
}));


app.use("/api/users", userRouter);

app.listen(8080, () => {
    console.log("Server is Running");
});