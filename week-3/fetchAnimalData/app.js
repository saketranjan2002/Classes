const express = require("express");
const path = require("path");
const fs = require("fs")
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname))


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"));
})

app.get("/Data",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
})

app.listen(PORT,(req,res)=>{
    console.log("server running");
})

