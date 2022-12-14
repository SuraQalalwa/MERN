import React, { useState } from 'react';

const TodoGenerator = () => {
    const [todo, setTodo] = useState("");
    const [todos, SetTodos] = useState([]);
    const [isDone, setIsDone] = useState(false);

    const toAddTask =(event)=>{
        event.preventDefault();
        SetTodos(todos.concat(todo));
        setTodo('')
    }
    const deleteTask =(e)=>{   
        SetTodos(todos=> todos.filter(todos=> todos!== e));
        console.log(todos);
    }
    const updateTask=(e)=>{
        const updetedTask= todos.filter(todos=> todos = e);
        setIsDone = !isDone;
        SetTodos(todos.concat(updetedTask));
    }
    return (
        <>
        {/* TO ADD Task */}
    <div>
        <form onSubmit={toAddTask}>
        <input type="text" onChange={e => setTodo(e.target.value)} />
        <input type="submit" value="Add" ></input>
        </form>
    </div>

        {/* TO RENDER, DELETE And CHECK TaskS */}
    {todos.map((todos,i) => {
        return <div key={i}>
        <p style={isDone?{textDecoration:"line-through"}:{}} key={i}>{todos}</p>
        <input type="checkbox" checked={isDone} onClick={(e) =>{updateTask(todos)}}/>        
        <button onClick={(e) =>{deleteTask(todos)}}>Delete</button>
        </div>;
    })}
    </>
    )
}

export default TodoGenerator;
