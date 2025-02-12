import ListItem from "./ListItem";
import styles from "./TodoList.module.css"

export default function TodoList({todos,setTodos}){

    const sortedTodos = todos.slice().sort((a,b)=>Number(a.completed) -Number(b.completed)); 
    return (
        <ul className={styles.todoList}>
        {sortedTodos.map((item,index)=>(
            <ListItem key={index} item={item} todos={todos} setTodos={setTodos}/> 
        ))
    }
    </ul>
    )
}