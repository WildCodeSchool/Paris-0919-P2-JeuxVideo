import React, { Component } from 'react';

import './Ecran.css';


class Ecran extends Component {
  render() {
    return (
      <div id="commandes">
        <h2 id='titleDesktop'>&lt; Commandes &gt;</h2>
        <h2 id='titleMobile'>&lt; Images du jeu &gt;</h2>
        <p>ZSQD/Flèches directionnelles: Bouger le personnage <br /><br />
          Touche E: Valider<br /><br />
        </p>
      </div>
    );
  }
}

export default Ecran;