import React from 'react';
import Nav from './components/nav';
import MainFrame1 from './components/MainFrame1';
import Picture from './components/picture';
import Heroes from './components/Heroes';
import About from './components/about';
import Roadmap from './components/Roadmap';
import Join from './components/Join';
import Footer from './components/Footer';
import "./styles.css"
function App() {
  return (
    <div className="App">
      <Nav/>
      <MainFrame1/>
      <Picture/>
      <Heroes/> 
      <About/>
      <Roadmap/>
      <Join/>
      <Footer/>
      <img className='elipse1' src="images/elipse1.svg"/>
      <img className='elipse2' src="images/elipse2.svg"/>
      <img className='elipse3' src="images/elipse3.svg"/>
    </div>
  );
}

export default App;
