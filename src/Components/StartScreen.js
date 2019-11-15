import React, { Component } from 'react';

import './StartScreen.css';

class StartScreen extends Component {
  render() {
    return (
      <div id='startScreen'>
        <h2>King.DOM Quest</h2>
        <div id='startScreenText'>
          <p id='startTheGame'>Press 'enter' to start the game</p>
          <p id='copyright'>Copyright RageGit Studio 2019</p>
          <div>Publicité</div>
        </div>
      </div>
    );
  }
}

export default StartScreen;