import styles from "./listItem.module.css"
import saveTodos from "./SaveTodos";


export default function ListItem({item,todos,setTodos}){

    function handleDeleteBtn(id){
        console.log("Delete button clicked with id:",{id});
        const updatedTodos = todos.filter((todo)=> todo.value !== id.value);
        setTodos(updatedTodos);
        saveTodos(updatedTodos);
        console.log(todos);
    }

    function handleCompleted(item){
        const updatedTodos = todos.map((todo)=> todo.value === item.value ? {...todo,completed:!todo.completed}:todo);
        console.log("completed: ",item.completed)
        setTodos(updatedTodos);
        saveTodos(updatedTodos);
    }
    

    const completedClass = item.completed ? styles.completed : "";
    return (
        <li className={styles.listItem}>
        <div  onClick={()=>handleCompleted(item)} className={`${styles.text} ${completedClass}`}>{item.value}</div>
        <button onClick ={()=>handleDeleteBtn(item)} id={item.value} className={styles.deleteBtn}>X</button>
        </li>
    )
}