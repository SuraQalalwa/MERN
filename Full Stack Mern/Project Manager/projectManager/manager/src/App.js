import './App.css';
import React from 'react';
import Main from './views/Main';
import {Router, Route} from 'react-router-dom';
import Detail from './views/Detail';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path="/product/" />
        <Route element={<Detail/>} path="/product/:id" />
      </Routes>
    <Main />
    </div>
  );
}

export default App;
