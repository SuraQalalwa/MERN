// import React, {useState} from 'react';

// const TodoDisplay = (props) => {
//     // const [todos, setTodos] = useState([]);
//     const [isDone, setIsDone] = useState(false);
//     // const ChecktoDo=(event)=>{
//     //     event.preventDefault();
//     // }
//     const deleteMe=(delid)=>{
//     props.todos.filter(c=> c.id !== delid);
//         console.log(delid)
//     }

//     return (
//     <div>
// {props.todos.map((todos,i) => {
//     return <div key={i}>
//     <p style={isDone?{textDecoration:"line-through"}:{}} key={i}>{todos}</p>
//     <input type="checkbox" checked={isDone} onChange={e => setIsDone(e.target.checked)}/>
//     <button onClick={(event) =>{deleteMe(i)}}>Delete</button>
//     </div>;
//   })}
//      </div>
//     )
// }

// export default TodoDisplay;

