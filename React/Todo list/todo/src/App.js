import TodoDisplay from './components/TodoDisplay';
import TodoGenerator from './components/TodoGenerator';
import React, { useState } from 'react';
import  './App.css';


function App() {
  // const [todos, SetTodos] = useState([]);

  const addTodo =(todo) => {
    SetTodos(todos.concat(todo));
  }

  return (
    <div className="App">
      {/* <TodoGenerator addTodo={addTodo} /> */}
      <TodoGenerator/>
    </div>
  );
}

export default App;
