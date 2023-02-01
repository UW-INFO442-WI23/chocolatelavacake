import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from './Components/Home/home.js';
import About from './Components/AboutUs/about.js';
import Mission from './Components/GetInvolved/mission.js'

export default function App(props) {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/Home" element={<Home/>} />
            <Route path="/About" element={<About />} />
            <Route path="/Mission" element={<Mission/>} />
          </Routes>
        </Router> 
      </div>
    );
  }
  