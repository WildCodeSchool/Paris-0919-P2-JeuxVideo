import React from 'react';
import './App.css';
import GameSynopsis from './Components/GameSynopsis'

import Header from './Components/Header'
import Ecran from './Components/Ecran'
import ContactForm from './Components/ContactForm'
import Kickstarter from './Components/Kickstarter'
import AboutTeam from './Components/AboutTeam'
import Carousel from './Components/Carousel'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className="App">
      <Header />
      <GameSynopsis/>
      <Ecran />     
      <Kickstarter />
      <AboutTeam />
      <Carousel />
      <ContactForm/>
      <Footer />      
    </div>
  );
}

export default App;