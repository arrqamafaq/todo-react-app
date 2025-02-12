import ListItem from "./ListItem";
import styles from "./TodoList.module.css"

export default function TodoList({todos,pushTodos}){

    return (
        <ul className={styles.todoList}>
        {todos.map((item,index)=>(
            <ListItem key={index} item={item} todos={todos} pushTodos={pushTodos}/> 
        ))
    }
    </ul>
    )
}