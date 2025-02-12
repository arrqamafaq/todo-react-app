import { useState } from "react";
import styles from "./form.module.css"
import saveTodos from "./SaveTodos";

export default function Form({todos , setTodos}){
    const [todo,addTodo]=useState({value:"",completed:false});
    
    function handleSubmit(e){
        e.preventDefault();
        if(todo.value.trim() === "") return;
        const updatedTodos=[...todos,todo];
        setTodos(updatedTodos);
        saveTodos(updatedTodos);
        addTodo({value:"",completed:false});
    }


    return (
    <>
    <form onSubmit={(e)=> handleSubmit(e)}>
    <input className={styles.taskInput} onChange={(e)=> addTodo({...todo,value:e.target.value})} placeholder="whats the plan ..." value={todo.value} id="todoInput"/>
    <button className={styles.taskInputBtn} type="submit">Add</button>
    </form>
    </>

    )
}