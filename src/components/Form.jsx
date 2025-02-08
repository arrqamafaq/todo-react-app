import { useState } from "react";

export default function Form({todos , pushTodos}){
    const [todo,addTodo]=useState("");
    
    
    function handleSubmit(e){
        e.preventDefault();
        pushTodos([...todos,todo])
        addTodo("");
    }


    return (
    <>
    <form onSubmit={(e)=> handleSubmit(e)}>
    <input onChange={(e)=> addTodo(e.target.value)} value={todo} id="todoInput"/>
    <button type="submit">Add</button>
    </form>
    </>

    )
}