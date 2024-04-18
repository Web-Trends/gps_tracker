import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Tracker from "./Tracker";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        {/* Switch is not working as it is depreceated from current version of React instead using Routes*/}
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/about" Component={About}/>
          <Route path="/contact" Component={Contact}/>
        </Routes>
      </div>
      <div>
        <Tracker />
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
