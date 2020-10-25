import React, {useState} from 'react';
import TodoTaskRow from './components/TodoTaskRow';
import "./app.css";

function App() {

  const [ todoList , updateTodoList ] = useState([])

  const [ textInputValue , updateTextInputValue ] = useState("")

  const onChangeTextInput = (e) => {
    updateTextInputValue(e.target.value)
  }
  const onClickSubmitButton = () => {
    updateTodoList(
      [...todoList, 
        {
          id: Math.random().toString().replace("0.", "") ,
          content: textInputValue
        }
      ]
    )
    updateTextInputValue("")
  }
  const onClickDeleteButton = (id) => {
    console.log(id)
    updateTodoList(todoList.filter(element=>element.id != id))
  }

  return (
    <div className="App">
      <div className="flex-row-spacearound-center" >
        <input className="textInput" value={textInputValue} onChange={ onChangeTextInput } />
        <button onClick={onClickSubmitButton} > Submit </button>
      </div>
      {
        todoList.map(element =>
          // <div key={element.id} className="flex-row-spacearound-center todo-item" >
          //   <div> {element.content} </div>
          //   <button onClick={()=>{onClickDeleteButton(element.id)}} > Delete </button>
          // </div>
          <TodoTaskRow  onClickDeleteButton={onClickDeleteButton} element={element} />
        )
      }

    </div>
  );
}

export default App;
