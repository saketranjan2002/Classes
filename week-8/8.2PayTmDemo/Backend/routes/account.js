const express = require("express");
const router = express.Router();
const User = require("../models/User")
const jwt = require("jsonwebtoken");
const { z } = require("zod")
const {JWT_SECRET_KEY} = require("../config");
const { authMiddleware } = require("../middleware");
const Account = require("../models/Account");
const { default: mongoose } = require("mongoose");

router.get("/balance",authMiddleware,async (req,res)=>{
    try{
        const userId = req.userId;
        
        const loggedInUserAccount = await Account.findOne({
            userId
        })
    
        return res.json({
            balance : loggedInUserAccount.balance
        })
    }catch(error){
        res.json({
            message : "Error while fetching balance"
        })
    }
})



// Transaction Api => Imp
router.post("/transfer",authMiddleware,async (req,res)=>{
    const session = await mongoose.startSession();

    session.startTransaction();
    
    const {
        to,
        amount
    } = req.body;

    const fromAccount = await Account.findOne({
        userId : req.userId
    }).session(session);

    if(!fromAccount || fromAccount.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            message : "Insufficient fund"
        })
    }

    const toAccount = await Account.findOne({
        userId:to
    }).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message : "Invalid To Account"
        })
    }

    await Account.updateOne({ userId : req.userId },{ $inc : { balance : -amount } }).session(session);
    await Account.updateOne({ userId : to },{ inc : { balance : amount } }).session(session);


    await session.commitTransaction();

    return res.json({
        message : "Transfer Successfull"
    })

})

module.exports = router;