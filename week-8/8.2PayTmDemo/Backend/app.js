const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;
const cors = require("cors");
const {connectDB} = (require("./DB/db"))
connectDB();

// app.use(express.json());
app.use(bodyParser.urlencoded({extended:true})); //app.use(express.urlencoded()) can also be used here -> PARSE URL ENCODED BODIES
app.use(bodyParser.json());  // app.use(express.json()) can also be used

app.use(cors({
    origin : "http://localhost:5173"
}))
app.use("/api/v1",indexRoute);



app.listen(PORT,(req,res)=>{
    console.log(`Backend Started at http://localhost:${PORT}`);
})


// add jwt auth
// implement signin, signup , update api endpoints
// create bank schema


// { LEARN : SOMETHING NEW }
// Transaction in database