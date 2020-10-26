import React , {useState} from 'react'; // import useState
import "./app.css"; //import your css file!!
import TodoRowComponent from './TodoRowComponent'; // import your todo component

const App = () => {

  const [inputValue , setInputValue] = useState("") //initilize inputValue as an empty string
  const [todoList , setTodoList] = useState([]) //initilize todoList as an empty array

  const displayWhatIType = ( e ) => {
    setInputValue( e.target.value )
  }
  
  const saveWhatIType = () => {
    let newContent = {
      id: Math.random().toString().replace("0.",""),
      content: inputValue.trim()
    }
  
    let copy = [...todoList]
    copy.push( newContent )
    setTodoList( copy )
    setInputValue( "" )
  }
  
  const deleteThisTodo = (id) => {
    setTodoList(
      todoList.filter( item => item.id != id )
    )
  }

  return (
    <div className="thisIsACol" >
      <div className="thisIsARow"  > 
        <input className="inputBox" onChange={displayWhatIType} value={inputValue} />
        <button onClick={saveWhatIType} >Save</button>
      </div>
        {
          todoList.map( element =>
            <TodoRowComponent element={element} deleteThisTodo={deleteThisTodo}  />  
          )
        }
    </div>
  );
}
export default App;










