import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo(){
    const loadTodos =()=> JSON.parse(localStorage.getItem("todos")) || []; 
    console.log(loadTodos)
    const[todos,setTodos] = useState(loadTodos);
    console.log(todos);
    const completedTodos = todos.filter((todo)=> todo.completed).length;
    const totalTodos=todos.length;


    return (
        <>
           <Form todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos}/>
            <Footer completed={completedTodos} total={totalTodos}/>
        </>
        
    )
}