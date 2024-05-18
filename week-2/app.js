const express = require("express");
const bodyParser = require("body-parser")
const PORT = 3000;

const app = express();
app.use(bodyParser.json());


calSum = (n) => {
    let ans = 0;
    for(let i=0;i<=n;i++){
        ans+=i;
    }
    return ans;  
}

app.get("/",(req,res)=>{
    const ans = calSum(req.query.n);
    res.send(ans.toString());
})

app.post("/post",(req,res)=>{
    res.send(req.body);
})

app.listen(PORT,(req,res)=>{
    console.log(`server started at : http://localhost:${PORT}`);
})