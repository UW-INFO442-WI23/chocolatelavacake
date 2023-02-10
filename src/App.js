import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from './Components/Home/home.js';
import About from './Components/AboutUs/about.js';
import Mission from './Components/GetInvolved/mission.js'
import Nav from './Components/Nav/nav.js';

export default function App(props) {
    return (
      <div className="App">
        <header>
          <h1>logo</h1>
          <Nav />
        </header>
        <body>
          <Home />
        </body>
 
      </div>
    );
  }
  