import React from 'react';
import Player from './Player'
import Enemy from './Enemy'
import Meta from './meta1_animated.gif'
import MetaDead from './meta_dead.png'
import Avatar from './avatar_animated.gif'
import Commands from './Commands'
import Dialog from './Dialog'
import Popup from './Popup';




class Battlescreen extends React.Component {

  state = {
    HP: 150,
    dialog: 'A wild meta appears',
    isDead: false,
    showPopup: false,
    HpPlayer: 200,
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.HP !== this.state.HP) {
      setTimeout( () =>
        this.enemyAttack(),        
        3000
      )
    }
  }
  
  enemyAttack = () => {
      const newhpPlayer = this.state.HpPlayer- (Math.floor(Math.random() * 50));
      this.setState({        
        HpPlayer: newhpPlayer,
        dialog: "The meta attacked you"
      }) 
  }

  handlePop = (isHere) =>{
    this.setState({showPopup: isHere})
  }

  render() {
    return (
      <div className="App">
        <div className='game-area'>

          <div className='enemystatus-area'>
            <Commands showPopup={this.handlePop}/>
            {this.state.showPopup ? (<Popup newHPClicked={this.newHPClickedChild} />) : (console.log('nothing'))}
            <div className="meta-area">
              <Enemy name={'Meta'} HP={this.state.HP} onChange={this.handleDamage()} />
              <img className='Meta' src={this.state.isDead ? MetaDead : Meta} alt='Meta'/>
            </div>
          </div>
          <div className='playerstatus-area'>
            <div className='avatar-area'>
              <img className='avatar' src={Avatar} alt='Avatar'></img>
              <Player  HpPlayer={this.state.HpPlayer} />
            </div>
            <div className='dialog-area'>


              <Dialog dialog={this.state.dialog} onChange={ this.handleDamage()} />


            </div>




          </div>
        </div>
      </div>
    );

  }

}

export default Battlescreen;
