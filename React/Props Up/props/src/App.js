// import logo from './logo.svg';
import './App.css';
import Personinfos from './components/PersonCard';

function App() {
  var pepole= [
    {"id":1, "lastName":"Doe", "firstName":"Jane","age":45, "haircolor":"black"},
    {"id":2, "lastName":"Smith","firstName":"John", "age":88, "haircolor":"Brown"},
    {"id":3, "lastName":"Fillmore","firstName":"Millard", "age":50, "haircolor":"Brown"},
    {"id":4, "lastName":"Smith","firstName":"Maria", "age":62, "haircolor":"Brown"}
]
  return (
    <div className="App">
      {pepole.map(x=>{
        return<Personinfos 
        firstName={x.firstName} 
        lastName={x.lastName} 
        age={x.age} 
        haircolor={x.haircolor}/>})}
      
    </div>
  );
}

export default App;
