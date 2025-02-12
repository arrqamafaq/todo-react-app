import styles from "./listItem.module.css"
export default function ListItem({item,todos,pushTodos}){

    function handleDeleteBtn(id){
        console.log("Delete button clicked with id:",{id});
        pushTodos(todos.filter((todo)=> todo !== id));
        console.log(todos);
    }
    return (
        <li className={styles.listItem}>
        <div>{item}</div>
        <button onClick ={()=>handleDeleteBtn(item)} id={item} className={styles.deleteBtn}>X</button>
        </li>
    )
}