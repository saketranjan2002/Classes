const express = require("express");
const router = express.Router();
const User = require("../models/User")
const jwt = require("jsonwebtoken");
const { z } = require("zod")
const {JWT_SECRET_KEY} = require("../config");
const { authMiddleware } = require("../middleware");

const signupUser = z.object({
    username : z.string().email(),
    firstname : z.string(),
    lastname : z.string(),
    password : z.string()
})

const signinUser = z.object({
    username : z.string().email(),
    password : z.string()
})

const updatedUser = z.object({
    firstname : z.string().optional(),
    lastname : z.string().optional(),
    password : z.string().optional()
})

router.post("/signup",async (req,res)=>{
    const user = {
        username,
        firstname,
        lastname,
        password
    } = req.body;

    const validation = signupUser.safeParse(req.body);  // check zod docs : https://www.npmjs.com/package/zod

    const ExistingUser = await User.findOne({
        username:req.body.username
    });
    if(ExistingUser){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }else if(!validation.success){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }else{

        const registeredUser = await User.create({
            username,
            firstname,
            lastname,
            password
        })                                        
        // password should be hashed before storing in db.
        // use bcrypt 
        // salt : (impurity added in the password and then hashed so that the hash is different even when the password is same)
        
        const userID = registeredUser._id;
        
        const token = jwt.sign({
            userID
        },JWT_SECRET_KEY);


        return res.json({
            message: "User created successfully",
	        token: token
        })
    }
})


router.post("/signin",async (req,res)=>{
    const {
        username,
        password
    } = req.body;

    const { success } = signinUser.safeParse(req.body);

    const signedInUser = await User.findOne({
        username,
        password
    })

    if(signedInUser && success){
        const userId = signedInUser._id;
        const token = jwt.sign({
            userId
        },JWT_SECRET_KEY);
        
        return res.status(200).json({
            token : token
        }) 
    }else{
        return res.status(411).json({
            message : "Error while logging in" 
        })
    }

})

router.put("/",authMiddleware,async (req,res)=>{
    
    const { success } = updatedUser.safeParse(req.body);
    
    if(!success){
        return res.status(411).json({
            message : "Error while updating information"
        })
    }

    const {
        firstname,
        lastname,
        password
    } = req.body;

    const userId = req.userId;
        
    await User.updateOne({
        _id : userId
    },req.body);

    return res.status(200).json({
        message:"Updated Successfully"
    })

})

router.get("/bulk",async (req,res)=>{
    const filterName = req.query.filter || "";

    const filteredUser = await User.find({
        $or : [{
            'firstname' : {
                "$regex" : filterName                                 // regex is used to match substr (sak -> saket)
            }
        },{
            'lastname' : {
                "$regex" : filterName
            }
        }]
    });

    return res.status(200).json({
        users : filteredUser.map(user => ({
            username : user.username,
            firstname : user.firstname,
            lastname : user.lastname,
            _id : user._id
        }))
    })

})

module.exports = router;