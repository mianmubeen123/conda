import './App.css';
import React from 'react';
import Header from "./mycomponents/Header"
import Footer from "./mycomponents/Footer"
import Home from "./mycomponents/Home"
import About from "./mycomponents/About"
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NoteState from './context/NoteState';
import Alert from './mycomponents/Alert';
import Login from './mycomponents/Login';
import Signup from './mycomponents/Signup';
import Private from './mycomponents/Private';
import { TextUtils } from './mycomponents/TextUtils';
import PreLoaing from './mycomponents/PreLoaing';
const App = () => {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setalert(null)
    }, 1500);

  }
const [Loading, setLoading] = useState(true);
setTimeout(() => {
  setLoading(false)
}, 1500);

  return (
    <>
       {Loading ?
    <PreLoaing/>:
      <NoteState>
        <Router>
          <Header />
          <Alert alert={alert}  />
          {/* <div className="container"> */}
            <Routes>
               <Route element={<Private/>}>
              <Route exact path="/" element={<Home showalert={showalert} />}> </Route>
              <Route exact path="/text" element={<TextUtils showalert={showalert} />}> </Route>
              </Route>
              <Route exact path="/about" element={<About />} >  </Route>        
              <Route exact path="/signup" element={<Signup showalert={showalert} />} >  </Route>
              <Route exact path="/login" element={<Login showalert={showalert} />} >  </Route>
            </Routes>
          {/* </div> */}
          <Footer />
        </Router>
      </NoteState>
      }
    </>
  )
}

export default App
