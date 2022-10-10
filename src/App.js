//import logo from './logo.svg';
import React, { useState } from 'react';
import "./styles.css";
// import './App.css';
// import ReactDOM from 'react-dom';
// import {
//   BrowseRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
// import SampleForm from "./sampleForm";

function App() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  ); 

  return (
    <div className="app">
      <div className="login-form">      
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}
export default App;

/*export function Hello(){
  return (
    <div classname="App">
      hi sathiya
    </div>
  );
}*/

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Learn React 
          
        </a>
      </header>
    </div>
  );
}
export default App;*/

/*export default function App() {
    const name="sathiya";
    return(
    <div>     
      <h1>
        {name}
      </h1>
      <button>click here</button>
    </div>
  );
}*/

/*Basic Class component creation 
class App extends React.Component{ 
    render(){ const name="sathiya"; 
    return(<div>      
      <h1>{name}</h1> 
    </div>);}}export default App */

// Create element functions--> create button using create element func
  /*export default function App() {
    const [name,setName]=useState("sathiya")
    const child=<div><h1>welcome {name}</h1></div>
    const name1=React.createElement("h1",{className:'site-heading'},child);
    return(
    <div>     
      <button onClick={()=>{name==="sathiya" ? setName("Navi") : setName("sathiya")}}>click here</button>
      {name1}
    </div>
  );
  }*/

  /*class App extends React.Component{
    render(){
      return(
        <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={SampleForm}>

            </Route>
          
          </Switch>
        </Router>
       </React.Fragment>
      );
    }
  }
  export default App*/

/*  function Pass(){ return ( <h1>Passed!</h1> ) }
    function Fail(){ return ( <h2>Failed!</h2> ) }
    function App (props){
      const result= props.isResult; 
      return(
        <>{result ? <Pass/> : <Fail/>}</>
      );
    }
    export default App */
  

