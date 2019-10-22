import React from 'react';
import './App.css';
import GameSynopsis from './Components/GameSynopsis'

import Header from './Components/Header'
import Ecran from './Components/Ecran'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Ecran />
    </div>
  );
}

export default App;