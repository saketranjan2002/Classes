import { useState } from "react";

export function CreateNewTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    
    const AddTodo=()=>{


        // axios can be used too
        fetch("http://localhost:3005/addtodo",{
            method:"POST",
            body:JSON.stringify({
                title : title,
                description : description,
            }),
            headers:{
                "content-Type":"application/json"
            }
        }).then(async(req,res)=>{
            const json = await res.json();   
            console.log(document.getElementById("title").value);     
            alert("To do added");
        })
    }
    
    return(
        <div>
            <input type="text" name="" id="title" placeholder="title" onChange={(e)=>{
                setTitle(e.target.value);
            }}/><br/>
            <input type="text" name="" id="description" placeholder="description" onChange={(e)=>{
                setDescription(e.target.value);
            }}/><br/>
            <button onClick={AddTodo}>Add Todo</button>
        </div>
    )
}


