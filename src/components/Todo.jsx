import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo(){
    const[todos,pushTodos]=useState([]);

    return (
        <>
           <Form todos={todos} pushTodos={pushTodos} />
            <TodoList todos={todos}/>
            {console.log(todos)}
        </>
        
    )
}