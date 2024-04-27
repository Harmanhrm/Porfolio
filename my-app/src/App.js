import './App.css';
import About from './components/about'
import Particle1 from "./components/particles";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Projects from "./components/Projects/Projects"
function App() {
  
  return (
    
    <Router>
    <div className="App">
      <Particle1 />  
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </Router>
);
}

export default App;
