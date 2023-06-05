const express=require('express');
const mongoose=require('mongoose');
const cors = require('cors');
const app=express();
require("dotenv").config();
app.use(express.json());
app.use(cors())
const users=require('./model');

app.post("/join/community",async(req,res)=>{
    const {name,emailid,mobile}=req.body;
    try{
        const addUser=await users.create({name,emailid,mobile});
        return res.json({
            "msg":"Success"
        })
    }catch(err){
        return res.json({
            "msg":"Unable to Process Your Request. Pls Try Again"
        })
        console.log(err);
    }
})
mongoose.connect("mongodb+srv://techtriples1:lWUKBEnUs5T9vfXW@cluster0.zhlvhdb.mongodb.net/").then(()=>{
    console.log("Mongo DB Connected");
    app.listen(process.env.PORT,(req,res)=>{
        console.log("Backend Connected");
    })
})