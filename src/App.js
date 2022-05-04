import './App.css';

import Header from './components/header/Header';


import { Routes, Route, Navigate } from 'react-router-dom';

import Projects from './components/projects/Projects'
import About from './components/about/About';
import Home from './components/home/Home';

function App() {
  return (

    <div className="App">

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
