// axios vs fetch

const axios = require("axios");

const mainPromise = () => {
    fetch("http//sum-server.100xdevs.com/todos")
    .then(async (response)=>{
        const json = await response.json();
        console.log(json.todos.length);
    })
}

async function mainAsyncAwait(){
    const resp = await fetch("http//sum-server.100xdevs.com/todos");
    const data = await resp.json();
    console.log(data.todos.length);
}

async function mainAxios(){
    const resp = await axios.get("http//sum-server.100xdevs.com/todos");     // if the method is get then axios.get(url,req config)
    console.log(resp.data.todos);
}

async function mainAxios(){
    const resp = await axios.post(     // if the method is post/put/delete then axios.post(url,body,req config)
        "http//sum-server.100xdevs.com/todos",{
            username : "ababhab",
            passwors : 2154e5
        },{
            headers:{
                Authorization : "Bearer 12334"
            }
        }
    );
    console.log(resp.data.todos);
}

