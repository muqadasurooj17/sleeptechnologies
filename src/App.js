
import './App.css';
import Hero from './components/Hero';
import Career from './components/Career';
import myImage from './images/pexels-fox-1-min.jpg';
import Brand from './components/Brand';
import myImage2 from './images/pexels-fox-2-min.jpg';
import Mission from './components/Mission';
import Contact from "./components/Contact";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
   <>
   <Router>
    <Navbar/>
<Hero/>
<img src={myImage} alt="Description of the image" style={{width:"100%", height:"max-content"}}/>
<Brand/>
<Mission/>
<img src={myImage2} alt="Description of the image" style={{width:"100%", height:"max-content"}}/>
<Career/>
<Contact/>
<Footer/>
    </Router>
   </>
    </div>
  );
}

export default App;
