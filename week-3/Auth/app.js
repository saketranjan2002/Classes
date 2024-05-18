const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require('fs');
const path = require("path");
const mongoose = require("mongoose");
const { log } = require("console");
const app = express();
const jwtPassword = 123;
const ConnectionURL = 'mongodb://localhost:27017/Demo';
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.listen(PORT,(req,res)=>{
    console.log("server running");
});


// Connecting To DB
mongoose.connect(ConnectionURL);

const User = mongoose.model("User",{
    username:String,
    password:String,
    name:String
})





// for simplecity, HERE all pass are same as jwtPassword
// but for jwt.sign or jwt.verify we have to use the same password in db objects's elements

const db = [
    {
        username:"saket@gmail.com",
        password:"123",
        name:"Saket"
    },
    {
        username:"saket1@gmail.com",
        password:"123",
        name:"Saket1"
    },
    {
        username:"saket2@gmail.com",
        password:"123",
        name:"Saket2"
    }
]



const verify=async(username,password)=>{
    let user = await User.findOne({ username });
    if(user && user.password==password){
        return true;
    }else{
        return false;
    }
}

app.post("/signup",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    
    let user = await User.findOne({ username });

    if(user){
        return res.status(403).json({
            msg:"Username already exists"
        })
    }else{
        const newUser = new User({
            username:username,
            password:password,
            name:name
        })
        newUser.save();
        return res.json({
            msg:"User Added"
        });
    }
})



app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(!verify(username,password)){ 
        return res.status(403).json({
            msg:"user does not exist"
        });
    }else{
        const token = jwt.sign({username:username},password);
        return res.json({
            msg:"user found",
            token : token
        });
    }
});


app.get("/users",async (req,res)=>{
    let token = req.headers.authorization;
    try{
        let decodedObj = jwt.verify(token,"1234"); // "1234" <= pass for saket@gmail.com
        let username = decodedObj.username;
        let userData = await User.find();
        return res.json({
            user:userData
        })
    }catch(err){
        return res.status(403).json({
            msg:"Something went wrong",
            error:err
        })
    }

})