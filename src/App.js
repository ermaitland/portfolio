// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
