import styles from "./listItem.module.css"
export default function ListItem({item}){

    return (
        <li className={styles.listItem}>{item}</li>
    )
}