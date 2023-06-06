import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { About } from './components/about/About';
import { Services } from './components/services/Services';
import { Approach } from './components/approach/Approach';
import { Projects } from './components/projects/Projects';
import { Footer } from './components/footer/Footer';
import { Tools } from './components/tools/Tools';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <Services/>
      <Approach/>
      <Tools/>
      <Footer/>
    </div>
  );
}

export default App;
