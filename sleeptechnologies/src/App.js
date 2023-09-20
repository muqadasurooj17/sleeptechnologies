
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import myImage from './images/pexels-fox-1-min.jpg';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
   <>
   <Router>
    <Navbar/>
<Hero/>
<img src={myImage} alt="Description of the image" style={{width:"100%", height:"max-content"}}/>
    </Router>
   </>
    </div>
  );
}

export default App;
