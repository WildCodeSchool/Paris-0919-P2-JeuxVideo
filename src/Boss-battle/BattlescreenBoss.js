import React from 'react';
import PlayerBoss from './PlayerBoss'
import EnemyBoss from './Enemyboss'
import CommandsBoss from './CommandsBoss'
import DialogBoss from './DialogBoss'
import PopupBoss from './PopupBoss';
import GameOver from '../Components/GameOver'

import './BattlescreenBoss.css'
// import { cpus } from 'os';


class BattlescreenBoss extends React.Component {

  state = {
    HP: 666,
    dialog: 'The Boss is here !!',
    isDead: false,
    showPopup: false,
    HpPlayer: 200,
    avatarData: '',
    avatarIsDead: false,
    avatarAlive: this.props.avatarData.alive,
    avatarNormal: this.props.avatarData.alive,
    avatarDamaged: this.props.avatarData.damaged,
    avatarDead: this.props.avatarData.dead,

    bossPhase: true,
    bossNormal: this.props.bossData.alive,
    bossAlive: this.props.bossData.alive,
    bossFinal: this.props.bossData.alive2,
    bossDamaged: this.props.bossData.damaged,
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
    if (this.state.bossPhase === true) {
      this.setState({
        HP: neoClickedHP,
        dialog: 'You attacked Browser',
        bossNormal: this.state.bossDamaged,
      })
      if (this.state.HP > 0) {
        setTimeout(() =>
          this.setState({
            bossNormal: this.state.bossAlive,
          }),
          1000
        )
      }
    } else {
      this.setState({
        HP: neoClickedHP,
        dialog: 'You attacked Browser',
        bossFinal: this.state.bossDamaged,
      })
      if (this.state.HP > 0) {
        setTimeout(() =>
          this.setState({
            bossFinal: this.state.bossAlive,
          }),
          1000
        )
      }
    }
  }



  //méthode pour actualiser la boite de dialogue et les HP de l'ennemy quand il est mort et revenir à la map à la fin du combat.
  handleDamage = () => {
    if (this.state.HP < 0) {
      this.setState({
        HP: 0,
        dialog: 'Ennemy Debugged',
        isDead: true,
        showPopup: false
      })
      setTimeout(() =>
        this.props.newMap(this.state.previousMap), 1000)
    }
  }


  // méthode qui gère quand l'ennemy attaque et l'animation de l'avatar
  enemyAttack = () => {
    this.ennemyDice = Math.floor(Math.random() * 10)
    if (this.ennemyDice > 2) {
      let newhpPlayer = 0
      {this.state.bossPhase? newhpPlayer = this.state.HpPlayer - (Math.floor(Math.random() * (40 - 20)) + 20) : newhpPlayer = this.state.HpPlayer - 7000  }
      this.setState({
        HpPlayer: newhpPlayer,
        dialog: "Browser attacked you",
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


  // méthode pour mettre un pop up game over
 //handleGameover = (event) => { <GameOver />}
 endingScreen = () => {
  this.props.newTop (3)
  this.props.newLeft (6)
  this.props.newMap(12)

}


  //pour fuir
  escape = () => {
    this.setState({ escape: true })
  }

  // update les HP du player quand il est attaqué et gère le git.ignore
  componentDidUpdate(prevProps, prevState) {
    if (prevState.HP !== this.state.HP || this.state.dialog === 'Your attack failed') {
      setTimeout(() =>
        this.enemyAttack(),
        1000
      )
    }
    if (this.state.escape === true) {
      this.setState({ escape: false, dialog: 'You cannot escape' })

    }
    if (this.state.HpPlayer < 0) {
      this.setState({
        HpPlayer: 0,
        dialog: 'Player defeated',
        avatarIsDead: true,
        showPopup: false,
      })
      setTimeout(() =>
        //this.handleGameover(), 200
        this.endingScreen(),2300

      )
    }
    if (this.state.HP < 550 && this.state.bossPhase === true){
      this.setState({ bossPhase: false,
                      dialog: 'Browser is getting angry' })
  }}

  componentDidMount() {
    if (this.props.sounds.length > 0) {
      document.querySelector('#Boss').play()
    }
  }

  render() {
    return (
      <div className="App">
      {this.props.sounds.length > 0 ? <audio id="Boss" src={this.props.sounds[4].url} /> : ''}
        <div className='game-area'>

          <div className='enemystatus-area'>
            <CommandsBoss escape={this.escape} showPopup={this.handlePop} />
            {this.state.showPopup ? (<PopupBoss dialog={this.handleFailure} newHPClicked={this.newHPClickedChild} />) : (console.log('nothing'))}
            <div className="meta-area">
              <EnemyBoss name={'Browser'} HP={this.state.HP} onChange={this.handleDamage()} />
              {this.state.bossPhase ? <img className='Browser' src={this.state.bossNormal} alt='Browser' />
                : <img className='Browser' src={this.state.bossFinal} alt='Browser' />}
            </div>
          </div>
          <div className='playerstatus-area'>
            <div className='avatar-area'>
              <img className='avatar' src={this.state.avatarIsDead ? this.state.avatarDead : this.state.avatarNormal} alt='Avatar'></img>
              <PlayerBoss HpPlayer={this.state.HpPlayer} />
            </div>
            <div className='dialog-area'>


              <DialogBoss dialog={this.state.dialog} onChange={this.handleDamage()} />


            </div>




          </div>
        </div>
      </div>
    );

  }

}

export default BattlescreenBoss;
