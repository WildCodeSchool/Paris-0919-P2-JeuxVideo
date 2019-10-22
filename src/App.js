import React from 'react';
import './App.css';

import Header from './Components/Header'
import Ecran from './Components/Ecran'
import ContactForm from './Components/ContactForm'
import Kickstarter from './Components/Kickstarter'
import AboutTeam from './Components/AboutTeam'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Ecran />
      <ContactForm/>
      <Kickstarter />
      <AboutTeam />
    </div>
  );
}

export default App;