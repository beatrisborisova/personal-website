import './App.css';

import Header from './components/header/Header';

import { Routes, Route } from 'react-router-dom';

import Projects from './components/projects/Projects'
import About from './components/about/About';
import Home from './components/home/Home';
import NotFound from './components/not-found/NotFound';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className="App">

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        {/* <Route path='*' element={<Navigate to='/' />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
