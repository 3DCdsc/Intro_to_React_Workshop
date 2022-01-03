import React, {useState, useCallback, useMemo, useEffect} from 'react';
import './App.css';

function App(props) {

  let [ textValue, setStateFunction ] = useState("initial")
  let [ todoItems, setTodoItems ] = useState([])

  useEffect(
    ()=>{
      console.log("on load")
    },[]
  )

  const onChangeTextInput = useCallback( (e)=>{
    setTextValue(e.target.value)
  },  [] )

  const onAddTodoItems = useCallback((e)=>{
    let copy = [...todoItems]
    copy.push(textValue)
    setTodoItems(copy)
  }, [])


  const onDeleteTodoItem = useCallback((index)=>{
    let copy = [...todoItems]
    copy.splice(index, 1)
    setTodoItems(copy)
  }, [todoItems])

  const numberOfTodoItems = useMemo(()=>todoItems.length, [todoItems])

  return (
    <div style={{width:'100vw'}} >

      <div className="header-container flex-row-center-center" >
        <div className="header-1" >
          Todo list: {numberOfTodoItems}
        </div>
      </div>

      <div className='flex-row-center-center input-container' >
          <div className="flex-row-center-center input-label">To do:</div>
          <input type="text" className='input-field' value={textValue} onChange={onChangeTextInput}/>       
          <button className="button" onClick={onAddTodoItems} >
              Add
            </button> 
      </div>

      <div 
        className="todo-container flex-column-center-center"
      >
        {
          todoItems.map((value, index)=>
            <div
              key={index}
              className="todo-item flex-row-space-between-center"
            > 
              <div className="flex-column-center-center" > {value} </div>
                <button className="button" onClick={()=>onDeleteTodoItem(index)} >
                  Remove
                </button>
                
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
