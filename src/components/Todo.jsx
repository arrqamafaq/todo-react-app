import { useState } from "react";
import Form from "./Form";
import RenderListItem from "./RenderListItem";

export default function Todo(){
    const[todos,pushTodos]=useState([]);

    return (
        <>
           <Form todos={todos} pushTodos={pushTodos} />
            <ul>
             <RenderListItem todos={todos}/>
             {console.log(todos)}
            </ul>
        </>
        
    )
}