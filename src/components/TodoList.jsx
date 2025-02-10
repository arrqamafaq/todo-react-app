import ListItem from "./ListItem";
import styles from "./TodoList.module.css"

export default function RenderListItem({todos}){

    return (
        <ul className={styles.todoList}>
        {todos.map((item,index)=>(
            <ListItem key={index} item={item}/> 
        ))
    }
    </ul>
    )
}