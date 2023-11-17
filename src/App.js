import React, { useState, useRef } from 'react';
import './App.css';

export default function App() {

  const [todo, setTodo] = useState([]);
  const todoInputRef = useRef(null);

  const addTodo = () => {
      const newTodo = todoInputRef.current.value;
      if (newTodo !== '') {
          setTodo([...todo, newTodo]);
          todoInputRef.current.value = '';
      }
  };

  const removeTodo = (index) => {
      const updatedTodos = [...todo];
      updatedTodos.splice(index, 1);
      setTodo(updatedTodos);
  };

  return (
    <div className="App">
      <div className="container">
          <h1>ToDo List</h1>
          <input type="text" ref={todoInputRef} placeholder="Enter an item" />
      
          <ul className="list">
              {todo.map((todo, index) => (
                  <li key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                      {todo}
                      <span className="text-dark" onClick={() => removeTodo(index)}>x</span>
                  </li>
              ))}
          </ul>

          <button className="cstm-button" onClick={addTodo}>Add</button>

      </div>

    </div>
  );
}


