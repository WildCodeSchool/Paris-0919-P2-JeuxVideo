import React, { Component } from 'react';

import './Kickstarter.css';

class Kickstarter extends Component {
  render() {
    return (
      <div id='kickstarter'>
        <h2>&lt; Soutenir ce projet &gt;</h2>
        <p>Intéressé ? Kickstartez notre projet.
            <br /><br />
              King.DOM Quest sera un jeu 100% gratuit sur  navigateur mais vous pouvez nous aider à financer le développement du jeu et profiter de récompenses exclusives à la sortie du jeu (goodies exclusifs, ost dédicacé...)  !
        </p>
        <button>Kickstarter</button>
      </div>
    );
  }
}

export default Kickstarter;