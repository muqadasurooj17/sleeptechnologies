
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
    </Router>
   </>
    </div>
  );
}

export default App;
