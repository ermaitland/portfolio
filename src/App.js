import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutMe' element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
