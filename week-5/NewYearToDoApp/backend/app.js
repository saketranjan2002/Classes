const express = require("express");
const app = express();
const cors = require("cors")
const { User,Todo } = require("./db/index");
const PORT = 3005;

//app.use(cors());   // this will allow http req from any frontend
app.use(cors({
    origin:"http://localhost:5173"   // ONLY THIS URL CAN SEND REQ TO BACKEND
}))
app.use(express.json());

app.post("/signup",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    // use zod here


    const existingUsr = await User.findOne({
        username,
        password
    });
    if(existingUsr){
        res.json({
            message:"User Already Exist!!!"
        })
    }else{
        const registerUsr = new User({
            username:username,
            password:password,
            todos   :[]
        })
        const registeredUsr = await registerUsr.save();
        res.json({
            message:"User Created Successfully"
        })
    }
})


app.post("/signin",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    // zod


    const existingUsr = await User.findOne({
        username,
        password
    });

    if(existingUsr){    
        res.json({

            // sign in logic
            message:"Logged in successfully"
        })
    }else{
        res.json({
            message:"Invalid Credentials"
        })
    }

})

app.post("/addtodo",async (req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const completed = false;

    // zod

    const newTodoObj = new Todo({
        title,
        description,
        completed
    })

    const newTodoAdded = await newTodoObj.save();

    res.json({
        message:"new todo added"
    })

})

app.get("/todos",async (req,res)=>{
    const AllTodos = await Todo.find({});
    res.json({
        Todos : AllTodos
    });
})

app.put("/completed",async (req,res)=>{
    const id = req.body.id;
    await Todo.updateOne({
        _id:id
    },{
        "$set":{"completed":true}
    });

    res.json({
        message:"To do marked as complete"
    })
})

app.listen(PORT,(req,res)=>{
    console.log(`backend running at PORT:${PORT}`);
})