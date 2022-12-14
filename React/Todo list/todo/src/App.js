import  './App.css';
import TaskGenerator from './components/TaskGenerator';
import TaskDisplay from './components/TaskDisplay';
import React, { useState } from 'react';


function App() {
  const [tasks, setTasks]=useState([]);
  
  const addTask = (newTask) => {
    setTasks(tasks.concat(newTask));
    console.log(tasks);
  }
  const removeTask = (todo) => {
    setTasks(tasks=> tasks.filter(todos=> todos!== todo));
    console.log(tasks);
  }
  const updateTask =(i)=>{
    const updatedTask=tasks.filter((task,id)=> id== i);
    updatedTask[0].completed= !updatedTask[0].completed;
    setTasks([...tasks])
  }
  return (
    <div className="App">
      <TaskGenerator addTask={addTask}/>
      <TaskDisplay tasks={tasks} removeTask={removeTask} updateTask={updateTask} />
    </div>
  );
}

export default App;
