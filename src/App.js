import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);

    }, 2000);
  }

  const toggleMode = () =>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = 'rgb(0 38 76)';
    showAlert("Dark Mode Enabled", "Success!! ");
    document.title="Dark Soodthedude";
    // setTimeout(() =>{
    //   document.title="Dark Soodthedude";

    // }, 2000);
    // setTimeout(() =>{
    //   document.title="Very Dark";

    // }, 3500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode Enabled", "Success!! ");
    document.title="Light Soodthedude";
  }
  }
  
  return (
    <>
    <Router>
      <Navbar title="Soodthedude" mode={mode} toggleMode={toggleMode} aboutText="About Us"/>
      <Alert alert={alert}/>
      <div className="container my-3">
      
        <Switch>
          
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter Your Text Below" mode={mode}/>
          </Route>
          
          <Route exact path="/about">
            <div className="container my-3" mode={mode}><About/></div>
          </Route>
          
        </Switch>
      
    
        
      </div>
      </Router>
      
      
      
      
    
    </>
  );
}

export default App;
