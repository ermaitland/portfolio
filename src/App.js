// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Home from './components/Home';
import Skills from './components/Skills';

function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/aboutMe' element={<AboutMe />} />
    //     <Route path='/contact' element={<Contact />} />
    //   </Routes>
    // </Router>
    <>
      <Home />
      <AboutMe />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
