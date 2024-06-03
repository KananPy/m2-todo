import React, { useState } from 'react'
import TodoList from './TodoList'

function TodoInput() {
    const [txt, setTxt] = useState('')
    const [todo, setTodo] = useState([])
  

    const resul = (e) => {
        setTxt(e.target.value)
    }
    const addData = () => {
        setTodo([...todo, txt])
        setTxt('')
       
    }

  return (
    <div>
        <input type="text" value={txt} onChange={resul}/>
        <button onClick={addData}>Add text</button>
        <TodoList data={todo}/>

    </div>
  )
}

export default TodoInput