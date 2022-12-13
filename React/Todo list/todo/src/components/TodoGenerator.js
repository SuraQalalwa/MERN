import React, { useState } from 'react';


const TodoGenerator = (props) => {
    const [todo, setTodo] = useState("");
    const [todos, SetTodos] = useState([]);
    const [isDone, setIsDone] = useState(false);

    const todoHandle =(event)=>{
        event.preventDefault();
        props.addTodo(todo);
        console.log(todo);
    }
    const addTodo =(todo) => {
        SetTodos(todos.concat(todo));
      }
    
    const deleteMe=(delid)=>{
            props.todo.filter(c=> c.id !== delid);
                console.log(delid)
            }
    return (
        <>
    <div>
        <form onSubmit={todoHandle}>
        <input type="text" onChange={e => setTodo(e.target.value)} />
        <input type="submit" value="Add" ></input>
        </form>
    </div>
        {/* <div> */}
    {props.todo.map((todos,i) => {
        return <div key={i}>
        <p style={isDone?{textDecoration:"line-through"}:{}} key={i}>{todos}</p>
        <input type="checkbox" checked={isDone} onChange={e => setIsDone(e.target.checked)}/>
        <button onClick={(event) =>{deleteMe(i)}}>Delete</button>
        </div>;
      })}
         </div>
         </>

    )
}

export default TodoGenerator;
