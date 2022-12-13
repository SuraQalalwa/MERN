import './App.css';
import {Router} from "@reach/router" ;
import Choice from './components/Choice';
import People from './components/People';
import Planet from './components/Planet';


function App() {
  
  return (
    <div className="App">
          <Choice/>
      <Router>
        <People path="/people/:id"/>
        <Planet path="/planets/:i"/>
      </Router>
    </div>
  );
}

export default App;
