import React, {useState} from 'react'

const TaskGenerator = (props) => {
    const[todo, setTodo]=useState('');
    const submitForm=(event)=>{
        event.preventDefault();
        const newTask ={
            text: todo,
            completed: false
            };
        props.addTask(newTask);
        console.log(newTask);
        setTodo('');
    }

return (
    <div>
        <div>
        <form onSubmit={submitForm}>
        <input type="text" onChange={e => setTodo(e.target.value)} />
        <input type="submit" value="Add" ></input>
        </form>
        </div>
    </div>
)
}

export default TaskGenerator
