// import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('danger') // whether Dark mode is Enable or Not
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type)=>{
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode =()=>{
    if(mode === 'danger'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been", "Success");
    }
    else{
      setMode('danger');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been", "Success");
    }
  }
  
  return (
    <>
    <Router>
      {/* <Navbar titel="TextUtils"AboutText="About TextUtils"/> */} 
      <Navbar titel="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
        <Route exact path="/about">
          <About mode={mode} />
        </Route>
        <Route exact path="/"> 
          <TextForm showAlert={showAlert} heading="Try TextUtils - Word COunter, Character Counter, Remove extra Spaces" mode={mode}/>
        </Route>
      </Switch>
      </div> 
    </Router>
    </>
    );
}
export default App;
