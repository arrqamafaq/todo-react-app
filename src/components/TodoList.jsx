import ListItem from "./ListItem";
import styles from "./TodoList.module.css"

export default function TodoList({todos,setTodos}){

    return (
        <ul className={styles.todoList}>
        {todos.map((item,index)=>(
            <ListItem key={index} item={item} todos={todos} setTodos={setTodos}/> 
        ))
    }
    </ul>
    )
}