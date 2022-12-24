import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import { Link, Route, Routes } from 'react-router-dom';
import List from './views/List';
import Status from './views/Status';

function App() {
  return (
    <div className="App">
      <Link to="/addplayer">Add Player</Link> <br></br>
      <Link to="/list">List</Link>
      <Routes>
        <Route element={<Main/>} path="/addplayer/"/>
        <Route element={<List/>} path="/list/"/>
        <Route element={<Status/>} path="/"/>
      </Routes>
    </div>
  );
}

export default App;
