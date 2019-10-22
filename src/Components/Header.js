import React, { Component } from 'react';

import Logo from './LogoFinalV2.png'

class Header extends Component {
  render() {
    return (
      <div >
        <img id='logoTeam' src={Logo} alt= "Logo de l'équipe" />
      </div>
    );
  }
}

export default Header;