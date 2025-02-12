import { useState } from "react";
import styles from "./form.module.css"
import saveTodos from "./SaveTodos";

export default function Form({todos , setTodos}){
    const [todo,addTodo]=useState({value:"",completed:false,id:null});
    
    function handleSubmit(e){
        e.preventDefault();
        if(todo.value.trim() === "") return;
        const updatedTodos=[...todos,todo];
        const todosWithId=updatedTodos.map((todo,index) => ({
            ...todo, 
            id: todo.value+index
        }));
        setTodos(todosWithId);
        saveTodos(todosWithId);
        addTodo({value:"",completed:false,id:null});
    }


    return (
    <>
    <form onSubmit={(e)=> handleSubmit(e)}>
    <input className={styles.taskInput} onChange={(e)=> addTodo({...todo,value:e.target.value})} placeholder="whats the plan ..." value={todo.value} id="todoInput"/>
    <button className={styles.taskInputBtn} type="submit">Add</button>
    {console.log(todos)}
    </form>
    </>

    )
}