import styles from "./listItem.module.css"


export default function ListItem({item,todos,setTodos}){

    function handleDeleteBtn(item){
        console.log("Delete button clicked with id:",item.id);
        const updatedTodos = todos.filter((todo)=> todo.id !== item.id);
        setTodos(updatedTodos);
        console.log(todos);
    }

    function handleCompleted(item){
        const updatedTodos = todos.map((todo)=> todo.id === item.id ? {...todo,completed:!todo.completed}:todo);
        console.log("completed: ",item.completed)
        setTodos(updatedTodos);
      
    }
    

    const completedClass = item.completed ? styles.completed : "";
    return (
        <li className={styles.listItem}>
        <div  onClick={()=>handleCompleted(item)} className={`${styles.text} ${completedClass}`}>{item.value}</div>
        <button onClick ={()=>handleDeleteBtn(item)} item={item} className={styles.deleteBtn}>X</button>
        </li>
    )
}