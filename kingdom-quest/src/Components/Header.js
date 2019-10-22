import React, { Component } from 'react';

import logo from './LogoFinalV2.png'

class Header extends Component {
  render() {
    return (
      <div >
        <img src={logo} />
      </div>
    );
  }
}

export default Header;