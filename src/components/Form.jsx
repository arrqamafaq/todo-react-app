import { useState } from "react";
import styles from "./form.module.css"

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
    <input className={styles.taskInput} onChange={(e)=> addTodo(e.target.value)} placeholder="Add task ..." value={todo} id="todoInput"/>
    <button className={styles.taskInputBtn} type="submit">Add</button>
    </form>
    </>

    )
}