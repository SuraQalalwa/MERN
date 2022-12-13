import logo from './logo.svg';
import './App.css';
import {Router,Link} from '@reach/router';
import Welcome from './components/Welcome';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Router>
        <Welcome path ="/home"/>
        <Display path ="/:word/:color1/:color2"/>
      </Router>
    </div>
  );
}

export default App;
