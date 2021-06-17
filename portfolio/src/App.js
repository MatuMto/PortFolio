import './App.css';
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Proyects from './components/Proyects'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Proyects/>
      <Footer/>
    </BrowserRouter>
    );
}

export default App;
