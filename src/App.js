import React from 'react';
import './App.css';

import Header from './Components/Header'
import Ecran from './Components/Ecran'
import ContactForm from './Components/ContactForm'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Ecran />
      <ContactForm/>
    </div>
  );
}

export default App;