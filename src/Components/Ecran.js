import React, { Component } from 'react';

import './Ecran.css';

class Ecran extends Component {
  render() {
    return (
      <div id="commandes">
        <h2>Commandes</h2>
        <p>ZSQD/Flèches directionnelles: Bouger le personnage <br /><br />
          Barre Espace: Valider<br /><br />
          Touches Ctrl + S: Sauvegarder</p>
        <div id="ecranJeu"></div>
      </div>
    );
  }
}

export default Ecran;