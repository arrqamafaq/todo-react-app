import ListItem from "./ListItem";

export default function RenderListItem({todos}){

    return (
        <>
        {todos.map((item,index)=>(
            <ListItem key={index} item={item}/> 
        ))
    }
    </>
    )
}