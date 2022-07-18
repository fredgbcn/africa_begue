const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require('dotenv').config();

 app.use(cors());
 app.use(express.json());

 //connect to mongoose
 mongoose.connect(process.env.REACT_APP_MONGO_URL, {useNewUrlParser: true}).then(()=>{
    console.log("connecté à Mongodb")
});
 //require route
 app.use("/", require("./routes/noteRoute"))

 app.listen(3001, function(){
     console.log("express server is running on port 3001")
 })