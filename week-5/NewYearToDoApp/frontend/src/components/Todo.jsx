import { useState } from "react";

export function Todo({todos}){
    return (
        <div>
            {   todos.map(function(todo){
                    return (
                        <div>
                            <h1>{todo.title}</h1>
                            <h1>{todo.description}</h1>
                            <button>{todo.completed==true ? "completed" : "mark as complete"}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}