const express = require("express");
const router = express.Router();
const User = require("../models/User")
const jwt = require("jsonwebtoken");
const { z } = require("zod")
const {JWT_SECRET_KEY} = require("../config")

const signupUser = z.object({
    username : z.string().email(),
    firstname : z.string().min(1),
    lastname : z.string().min(1),
    password : z.string().min(4)
})

router.post("/signup",async (req,res)=>{
    const validation = signupUser.safeParse(req.body);  // check zod docs : https://www.npmjs.com/package/zod

    const RegisteredUser =await User.findOne({
        username:username
    });
    if(RegisteredUser){
        res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }else{
        const token = jwt.sign({
            username
        },JWT_SECRET_KEY);

        res.json({
            message: "User created successfully",
	        token: token
        })
    }


})

module.exports = router;