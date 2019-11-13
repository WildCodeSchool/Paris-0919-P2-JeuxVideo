import React from 'react';
import Player from './Player'
import Enemy from './Enemy'
import Meta from './meta1_animated.gif'
import MetaDead from './meta_dead.png'
import Avatar from './avatar_animated.gif'
import Commands from './Commands'
import Dialog from './Dialog'
import Popup from './Popup';

import './Battlescreen.css'


class Battlescreen extends React.Component {

  state = {
    HP: 150,
    dialog: 'A wild meta appears',
    isDead: false,
    showPopup: false,
    HpPlayer: 200,
    avatarIsDead: false,
    avatarisAlive: "./Database/assets/avatar_animated.gif",
    avatarDamaged: "./Database/assets/avatar_damage.gif",
    avatarDead : "./Database/assets/avatar_dead.gif",
    previousMap: this.props.previousMap,
    escape:false,
  }

 // méthode pour récupérer les HP de l'ennemi
  newHPClickedChild = neoClickedHP => {
    this.setState({
      HP: neoClickedHP,
    })
  };


  //méthode pour actualiser la boite de dialogue et les HP de l'ennemy quand il est mort et revenir à la map à la fin du combat.
  handleDamage = () => {
    if (this.state.HP < 0) {
      this.setState({
        HP: 0,
        dialog: 'Ennemy defeated',
        isDead: true,
        showPopup: false
      })
      setTimeout( ()=>
      this.props.newMap(this.state.previousMap), 1000)
    } 
  }


 // méthode qui gère quand l'ennemy attaque
  enemyAttack = () => {
    const newhpPlayer = this.state.HpPlayer- (Math.floor(Math.random() * 50));
    this.setState({        
      HpPlayer: newhpPlayer,
      dialog: "The meta attacked you"
    }) 
}

// méthode pour faire apparaitre la popup
handlePop = (isHere) =>{
  this.setState({showPopup: isHere})
}


  //pour fuir
  escape=()=>{
    this.setState({escape: true})
  }

// update les HP du player quand il est attaqué et gère le git.ignore
  componentDidUpdate(prevProps, prevState) {
    if (prevState.HP !== this.state.HP) {
      setTimeout( () =>
        this.enemyAttack(),        
        2000
      )
    } 
    if (this.state.escape=== true){
      this.setState({escape: false})
      this.props.newMap(this.state.previousMap)
    }
    if (this.state.HpPlayer < 0) {
      this.setState({
        HpPlayer: 0,
        dialog: 'Player defeated',
        avatarIsDead:true,
        showPopup: false
      })
  }}
  


  render() {
    return (
      <div className="App">
        <div className='game-area'>

          <div className='enemystatus-area'>
            <Commands escape={this.escape} showPopup={this.handlePop}/>
            {this.state.showPopup ? (<Popup newHPClicked={this.newHPClickedChild} />) : (console.log('nothing'))}
            <div className="meta-area">
              <Enemy name={'Meta'} HP={this.state.HP} onChange={this.handleDamage()} />
              <img className='Meta' src={this.state.isDead ? MetaDead : Meta} alt='Meta'/>
            </div>
          </div>
          <div className='playerstatus-area'>
            <div className='avatar-area'>
              <img className='avatar'  src={this.state.avatarIsDead ? this.state.avatarDead : this.state.avatarisAlive} alt='Avatar'></img>
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
