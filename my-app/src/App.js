import './App.css';
import About from './components/about'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />}/>
          <Route path="/about" element={<About/>}/>
       
          
      </Routes>
    </Router>
  );
}

export default App;
