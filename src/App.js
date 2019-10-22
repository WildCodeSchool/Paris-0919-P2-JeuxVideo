import React from 'react';
import './App.css';
import GameSynopsis from './Components/GameSynopsis'

import Header from './Components/Header'

const App = () => {
  return (
    <div className="App">
      <Header />
      <GameSynopsis />

    </div>
  );
}

export default App;