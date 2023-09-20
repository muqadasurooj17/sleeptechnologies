
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
  <Routes>
    
    <Route exact path='/' element={<Navbar/>}/>
    <Route exact path='/' element={<Hero/>}/>

  </Routes>
    </Router>
   </>
    </div>
  );
}

export default App;
