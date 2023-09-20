
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import myImage from './images/pexels-fox-1-min.jpg';
import Brand from './components/Brand';
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
<Brand/>

    </Router>
   </>
    </div>
  );
}

export default App;
