import { useState } from "react";
import ListItem from "./ListItem";


export default function Todo(){

    const [todo,addTodo]=useState("");
    const[todos,pushTodos]=useState([]);


    function handleSubmit(e){
        e.preventDefault();
        pushTodos([...todos,todo])
    }


    return (
        <>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <input onChange={(e)=> addTodo(e.target.value)} value={todo} id="todoInput"/>
                <button type="submit">Add</button>
            </form>
            {console.log(todos)}
            <ul>
                {todos.map((item,index)=>[
                    <ListItem key={index} item={item}/> 
                ])
                }
            </ul>
        </>
    )
}