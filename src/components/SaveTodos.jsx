export default function SaveTodos(updatedTodos){
    localStorage.setItem("todos",JSON.stringify(updatedTodos));
}