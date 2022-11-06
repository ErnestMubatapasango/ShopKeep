import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from "./components/pages/Home"
import Features from "./components/pages/Features"
import Contact from "./components/pages/Contact"
import About from "./components/pages/About"
import Pricing from "./components/pages/Pricing"
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
     
      <Router>
        <Navbar/>

        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/features' component={Features}/>
          <Route path='/pricing' component={Pricing}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
