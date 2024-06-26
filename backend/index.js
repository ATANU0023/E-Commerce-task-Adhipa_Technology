port = 4000;

require("dotenv").config();
const  express  = require("express");
const mongoose = require("mongoose");
const  Jwt  = require("jsonwebtoken");
const multer = require("multer");



const app = express();
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/',(req, res)=>{
    res.send("Express app is running");
})

app.listen(port,(error)=>{
   
    if(!error){
        console.log("Server is runnig on port " +  port);
    }else{
        console.log('error' + error);
    }
})

