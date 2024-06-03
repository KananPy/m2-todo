import React from 'react'

function TodoList({data}) {

    console.log(data);

  return (
    <div>
        {data.map((adam, index) => (
            <p key={index}> {adam} </p>
        ))}
    </div>
  )
}

export default TodoList