import React from 'react';
import Axios from 'axios'
import Player from './Player'
import Enemy from './Enemy'
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
    avatarData: '',
    avatarIsDead: false,
    avatarAlive: this.props.avatarData.alive,
    avatarNormal: this.props.avatarData.alive,
    avatarDamaged: this.props.avatarData.damaged,
    avatarDead: this.props.avatarData.dead,
    metaNormal: this.props.metaData.alive,
    metaAlive: this.props.metaData.alive,
    metaDamaged: this.props.metaData.damaged,
    metaDead: this.props.metaData.dead,
    previousMap: this.props.previousMap,
    escape: false,
  }

  // remonter le message
  handleFailure = (text) => {
    this.setState({ dialog: text })
  }


  ennemyDice = 0
  // méthode pour récupérer les HP de l'ennemy et changer animation du l'ennemy
  newHPClickedChild = neoClickedHP => {
    this.setState({
      HP: neoClickedHP,
      dialog: 'You attacked the Meta',
      metaNormal: this.state.metaDamaged,
    })
    if (this.state.HP > 0) {
      setTimeout(() =>
        this.setState({
          metaNormal: this.state.metaAlive
        }),
        1000
      )
    }
  };


  //méthode pour actualiser la boite de dialogue et les HP de l'ennemy quand il est mort et revenir à la map à la fin du combat.
  handleDamage = () => {
    if (this.state.HP < 0) {
      this.setState({
        HP: 0,
        dialog: 'Ennemy Debugged',
        isDead: true,
        showPopup: false
      })
      if (this.props.sounds.length > 0) {
        document.querySelector("#Battle").pause()
        document.querySelector("#Victory").play()
      }
      setTimeout(() =>
        this.props.newMap(this.state.previousMap), 4000)
    }
  }


  // méthode qui gère quand l'ennemy attaque et l'animation de l'avatar
  enemyAttack = () => {
    this.ennemyDice = Math.floor(Math.random() * 10)
    if (this.ennemyDice > 3) {
      const newhpPlayer = this.state.HpPlayer - (Math.floor(Math.random() * (30 - 20)) + 20);
      this.setState({
        HpPlayer: newhpPlayer,
        dialog: "The Meta attacked you",
        avatarNormal: this.state.avatarDamaged,

      })
      if (this.state.HpPlayer > 0) {
        setTimeout(() =>
          this.setState({
            avatarNormal: this.state.avatarAlive
          }),
          1000
        )
      }
    } else {
      this.setState({ dialog: "the ennemy's attack failed!!" })
    }
  }

  // méthode pour faire apparaitre la popup
  handlePop = (isHere) => {
    this.setState({ showPopup: isHere })
  }


  //pour fuir
  escape = () => {
    this.setState({ escape: true })
  }

  // update les HP du player quand il est attaqué et gère le git.ignore
  componentDidUpdate(prevProps, prevState) {
    if (this.state.HP <= 0){
      return
    }
    else if (prevState.HP !== this.state.HP || this.state.dialog === "Your attack failed") {
      setTimeout(() =>
        this.enemyAttack(),
        1000
      )
    }

    if (this.state.escape === true) {
      this.setState({
        escape: false,
        dialog: 'You ignored all changes'
      })
      setTimeout(() =>
        this.props.newMap(this.state.previousMap), 1300)
    }
    if (this.state.HpPlayer < 0) {
      this.setState({
        HpPlayer: 0,
        dialog: 'Player defeated',
        avatarIsDead: true,
        showPopup: false
      })
    }
  }

  componentDidMount() {
    if (this.props.sounds.length > 0) {
      document.querySelector("#Battle").play()
    }
  }

  render() {

    return (
      <div className="App">
        {this.props.sounds.length > 0 ? <audio id="Battle" src={this.props.sounds[2].url} /> : ''}
        {this.props.sounds.length > 0 ? <audio id="Victory" src={this.props.sounds[3].url} /> : ''}
        <div className='game-area'>

          <div className='enemystatus-area'>
            <Commands escape={this.escape} showPopup={this.handlePop} />
            {this.state.showPopup ? (<Popup dialog={this.handleFailure} newHPClicked={this.newHPClickedChild} />) : (console.log('nothing'))}
            <div className="meta-area">
              <Enemy name={'Meta'} HP={this.state.HP} onChange={this.handleDamage()} />
              <img className='Meta' src={this.state.isDead ? this.state.metaDead : this.state.metaNormal} alt='Meta' />
            </div>
          </div>
          <div className='playerstatus-area'>
            <div className='avatar-area'>
              <img className='avatar' src={this.state.avatarIsDead ? this.state.avatarDead : this.state.avatarNormal} alt='Avatar'></img>
              <Player HpPlayer={this.state.HpPlayer} />
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

export default Battlescreen;
