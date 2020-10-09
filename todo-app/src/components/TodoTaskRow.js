import React, {useState} from 'react';
import '../app.css';

const TodoTaskRow = (props) => {

    const {
        element,
        onClickDeleteButton
    } = props

    return(
        <div key={element.id} className="flex-row-spacearound-center todo-item" >
            <div> {element.content} </div>
            <button onClick={()=>{onClickDeleteButton(element.id)}} > Delete </button>
        </div>
    )
}

export default TodoTaskRow