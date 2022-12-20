
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllAuthors from './views/AllAuthors';
import Main from './views/Main';
import Update from './views/Update';


function App() {
  return (
    <>
    <h1>Favorite Authors</h1>
    <div className="App">
    <Routes>
      <Route element={<Main/>} path="/new/"/>
      <Route element={<AllAuthors/>} path="/"/>
      <Route element={<Update/>} path="/edit/:id"/>

    </Routes>
    </div>
    </>
  );
}

export default App;
