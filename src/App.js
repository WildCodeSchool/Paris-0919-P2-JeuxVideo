import React from 'react';
import './App.css';
import GameSynopsis from './Components/GameSynopsis'

import Header from './Components/Header'
import Ecran from './Components/Ecran'
import Kickstarter from './Components/Kickstarter'
import AboutTeam from './Components/AboutTeam'

const App = () => {
  return (
    <div className="App">
      <Header />
      <GameSynopsis/>
      <Ecran />
      <Kickstarter />
      <AboutTeam />
    </div>
  );
}

export default App;