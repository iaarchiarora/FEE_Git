//import logo from './logo.svg';
import './App.css';
//import Home from './Component/Home';
//import Welcome from './Component/Welcome';
// import Greetings from './Component/Greetings';
import Product from './Component/Product';
import 'bootstrap/dist/css/bootstrap.css';
import Car from './Component/Car';
import PersonList from './Component/PersonList';
function App() {
  
  return (
    //bs return ke andr wala part is jsx
    //JSX Format
    <>
   
    <div className="App">
    <Product></Product>
     {/* <h1>Hello hru</h1> */}
{/* 
      <p>this is  para </p>
      <button>You can Click here</button>
      <p>
        {display()}
      </p> */}
      {/* <Home></Home> */}
      {/* <About></About> */}
      {/* <Welcome name=" Aarchi" mark="200"/> */}
      
      {/* <Welcome name=" Arora"/> */}

      {/* <Greetings isLoggedIn='false'></Greetings>      */}

      <Car></Car>
      <PersonList></PersonList>
     
    </div>
   
    </>
  );
}
// function display() {
//   alert("Hello this is  react's first class")
// }

export default App;
//this is v zruri
