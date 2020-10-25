import React from 'react'

const TodoRowComponent = (props) => {

    let { element , deleteThisTodo } = props

    return(
        <div key={element.id} className="thisIsARow">
            <div> {element.content} </div>
            <button onClick={()=>deleteThisTodo(element.id)}> Delete </button>
        </div>
    )
}

export default TodoRowComponent