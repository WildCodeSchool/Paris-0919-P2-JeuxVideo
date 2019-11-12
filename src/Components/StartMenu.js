import React, { Component } from 'react';

import Options from './Options'

import './StartMenu.css';

class StartMenu extends Component {
  // state = {
  //   options: false
  // }

  // handleClick = () => {
  //   this.setState({
  //     options: true
  //    })
  // }
  // {this.state.options ? <Options /> : console.log('ntm')}
    
  render() {
    return (
      <div id='startMenu'>
        <section>
          <div>Start a new game</div>
          <div>Load a game</div>
          <div id='options' onClick={this.handleClick}> Options
          </div>
          <div>Credits</div>
          <div id='startMenuPub'>Publicité</div>
        </section>
      </div>
    );
  }
}
export default StartMenu;