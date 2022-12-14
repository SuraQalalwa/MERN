import React from 'react'

const TaskDisplay = (props) => {
    const removeTask =(e)=>{
        props.removeTask(e)
    }
    const updateTask =(e)=>{
        props.updateTask(e)
    }
    return (
    <div>
    {props.tasks.map((todos,i) => {
        return <div key={i}>
        <p style={todos.completed?{textDecoration:"line-through"}:{}} key={i}>{todos.text}</p>
        <input type="checkbox" onClick={(e) =>{updateTask(i)}}/>        
        <button onClick={(e) =>{removeTask(todos)}}>Delete</button>
        </div>;
    })}
    </div>
    )
}

export default TaskDisplay

