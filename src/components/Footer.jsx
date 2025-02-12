import styles from "./footer.module.css"
export default function Footer({completed,total}){

    return (
        <footer>
            <div>Completed Todos: {completed}</div>
            <div>Total Todos: {total}</div>
        </footer>
    )
}