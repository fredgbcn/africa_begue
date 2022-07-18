import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar_essai";
import Home from "./components/Home";
import About from "./components/About";
import Cours from "./components/Cours";
import Solidaire from "./components/Solidaire";
import CreateEvent from "./components/CreateEvent";
import Events from "./components/Events";
import Contact from "./components/Contact";
import './App.css';

function App() {

  return (

   <Router>
  
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/events" element={<Events />} />
    
      <Route path="/cours" element={<Cours />} />

      <Route path="/solidaire" element={<Solidaire />} />
      
      <Route path={process.env.REACT_APP_CREATE} element={<CreateEvent />} />

      <Route path="/contact" element={<Contact />} />

    </Routes>
   </Router>
  );
}

export default App;
