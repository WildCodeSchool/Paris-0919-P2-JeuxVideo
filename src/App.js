import React from 'react';
import './App.css';

import Header from './Components/Header'
import Ecran from './Components/Ecran'
import Kickstarter from './Components/Kickstarter'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Ecran />
      <Kickstarter />
    </div>
  );
}

export default App;