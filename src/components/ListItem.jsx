import styles from "./listItem.module.css"
export default function ListItem({item,todos,setTodos}){

    function handleDeleteBtn(id){
        console.log("Delete button clicked with id:",{id});
        setTodos(todos.filter((todo)=> todo.value !== id.value));
        console.log(todos);
    }

    function handleCompleted(item){
        const newArr = todos.map((todo)=> todo.value === item.value ? {...todo,completed:!todo.completed}:todo);
        console.log("completed: ",item.completed)
        setTodos(newArr);
    }

    const completedClass = item.completed ? styles.completed : "";
    return (
        <li className={styles.listItem}>
        <div  onClick={()=>handleCompleted(item)} className={`${styles.text} ${completedClass}`}>{item.value}</div>
        <button onClick ={()=>handleDeleteBtn(item)} id={item.value} className={styles.deleteBtn}>X</button>
        </li>
    )
}