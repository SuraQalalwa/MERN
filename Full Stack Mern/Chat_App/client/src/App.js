import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import io from 'socket.io-client'
import Chat from './components/Chat';
import Main from './views/Main';
import { Route, Routes } from 'react-router-dom';
import SenderForm from './components/SenderForm';


function App() {
//   const [socket]= useState(()=> io(':8000'));
//   useEffect(()=>{
//     console.log('Is this running');
//     socket.on('Welcome',
//       data=>console.log(data))
//   })
//   return (
//     <div className='App'>
//       <h1>Hiiiiiiiiiiiii</h1>
//     </div>

//   );
return (
<div>
  <Main/>
</div>
)}

export default App;
