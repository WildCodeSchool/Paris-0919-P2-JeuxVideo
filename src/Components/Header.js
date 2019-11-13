import React, { Component } from 'react';

import Logo from './LogoFinalV2.png'
import Logo2 from './kdq.jpg'

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div id='header'>
        <img id='logoTeam' src={Logo} alt= "Logo de l'équipe" />
        <div id='title'>
          <img id='logoJeu' src={Logo2} alt= "Logo du jeu" />
          <h1>King.DOM <span>Quest</span></h1>
        </div>
      </div>
    );
  }
}

export default Header;