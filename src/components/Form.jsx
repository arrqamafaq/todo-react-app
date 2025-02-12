import { useState } from "react";
import styles from "./form.module.css"

export default function Form({todos , setTodos}){
    const [todo,addTodo]=useState({value:"",completed:false});
    
    
    function handleSubmit(e){
        e.preventDefault();
        if(todo.value.trim() === "") return;
        setTodos([...todos,todo])
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