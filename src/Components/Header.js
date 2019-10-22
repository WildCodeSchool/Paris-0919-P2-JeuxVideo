import React, { Component } from 'react';

import Logo from './LogoFinalV2.png'
import Logo2 from './LogoJeu.png'

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div id='header'>
        <img id='logoTeam' src={Logo} alt= "Logo de l'équipe" />
        <img id='logoJeu' src={Logo2} alt= "Logo du jeu" />
        <h1>King.DOM Quest</h1>
      </div>
    );
  }
}

export default Header;