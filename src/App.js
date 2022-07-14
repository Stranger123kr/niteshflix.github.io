import './App.css';
import Alert from './Alert';
import Navbar from './Navbar';
// import About from './About';
import TextFrom from './TextFrom';
import React, { useState } from 'react'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // wether dark mode is enable or not
  const [alert, setAlert] = useState("")

const ShowAlert = (message,type)=>{

  setAlert({
    msg:message,
    type:type
  })
    
  setTimeout(() => {
     setAlert()
  }, 1500);
}

  const toggleMode = () => {

    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      ShowAlert('Dark mode in Enable now','Succeed')
      document.title = "Textutil- Dark Mode"


      // setInterval(() => {
      //   document.title = "Textutil is Amazing mode"

      // }, 1500);
      // setInterval(() => {
      //   document.title = "Install Textutils Now"

      // }, 1000);


    } else {
      setMode('light')
      document.body.style.backgroundColor = "White"
      ShowAlert('Light mode in Enable now','Succeed')
      document.title = "Textutil- Light Mode"
    }

  }
  return (
    <>
      {/* <Router> */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert  alert={alert}/>
      <div className="container my-3">
      {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route>
          <Route exact path="/"> */}
         <TextFrom ShowAlert={ShowAlert} heading="this is letter" mode={mode} />
          {/* </Route> */}
        {/* </Switch> */}
      {/* </Router> */}
      </div>
    </>
  );
} 
export default App;
 
