import { useEffect, useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

const loadTodos =()=> JSON.parse(localStorage.getItem("todos")) || []; 

export default function Todo(){
    console.log(loadTodos)
    const[todos,setTodos] = useState(loadTodos);

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
    },[todos])
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