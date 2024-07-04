import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Navbar from './pages/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/projects' Component={Projects}/>
          <Route path='/achievements' Component={Achievements}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
