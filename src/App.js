import React from 'react';
import Player from './components/Player'
import Enemy from './components/Enemy'
import Meta from './components/meta1_animated.gif'
import MetaDead from './components/meta_dead.png'
import Avatar from './components/avatar_animated.gif'
import Command from './components/Commands'
import Dialog from './components/Dialog'
import './App.css';
import Popup from './components/Popup';


class App extends React.Component {
  state = {
    HP: 150,
    dialog: 'A wild meta appears',
    isDead: false,
    showPopup: false,
  }
  newHPClickedChild = neoClickedHP => {
    this.setState({
      HP: neoClickedHP,
    })
  };
  // Ici, notre méthode pour actualiser la boite de dialogue et les HP.
  handleDamage = () => {
    if (this.state.HP < 0) {
      this.setState({
        HP: 0,
        dialog: 'Ennemy defeated',
        isDead: true,
        showPopup: true,

      })
    }
  }

  handlePop = () =>{
    this.setState({showPopup: !this.state.showPopup})
  }

  render() {
    return (
      <div className="App">
        <div className='game-area'>

          <div className='enemystatus-area'>
            <Command />
            <button type="button" onClick={this.handlePop}>test</button>
            {this.state.showPopup ? (<Popup newHPClicked={this.newHPClickedChild} />) : (console.log('nothing'))}
            <div className="meta-area">
              <Enemy name={'Meta'} HP={this.state.HP} onChange={this.handleDamage()} />


              <img className='Meta' src={this.state.isDead ? MetaDead : Meta} alt='Meta'></img>

            </div>
          </div>
          <div className='playerstatus-area'>
            <div className='avatar-area'>
              <img className='avatar' src={Avatar} alt='Avatar'></img>
              <Player />
            </div>
            <div className='dialog-area'>


              <Dialog dialog={this.state.dialog} onChange={this.handleDamage()} />


            </div>




          </div>
        </div>
      </div>
    );

  }

}

export default App;
