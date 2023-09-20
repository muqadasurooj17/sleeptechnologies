
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Career from './components/Career';
import myImage from './images/pexels-fox-1-min.jpg';
import Brand from './components/Brand';
import myImage2 from './images/pexels-fox-2-min.jpg';
import Mission from './components/Mission';
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
<Hero/>
<img src={myImage} alt="Description of the image" style={{width:"100%", height:"max-content"}}/>
<Brand/>
<Mission/>
<img src={myImage2} alt="Description of the image" style={{width:"100%", height:"max-content"}}/>
<Career/>
    </Router>
   </>
    </div>
  );
}

export default App;
