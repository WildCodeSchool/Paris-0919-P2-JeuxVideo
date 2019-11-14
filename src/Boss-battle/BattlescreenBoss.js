import React from 'react';
import PlayerBoss from './PlayerBoss'
import EnemyBoss from './Enemyboss'
import CommandsBoss from './CommandsBoss'
import DialogBoss from './DialogBoss'
import PopupBoss from './PopupBoss';

import './BattlescreenBoss.css'


class BattlescreenBoss extends React.Component {

  state = {
    HP: 150,
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

    bossNormal: this.props.bossData.alive,
    bossAlive:this.props.bossData.alive,
    bossFinal: this.props.bossData.alive2,
    bossDamaged: this.props.bossData.damaged,
    previousMap: this.props.previousMap,
    escape:false,
  }

 // méthode pour récupérer les HP de l'ennemy et changer animation du l'ennemy
  newHPClickedChild = neoClickedHP => {
    this.setState({
      HP: neoClickedHP,
      dialog: 'You attacked Browser',
      bossNormal: this.state.bossDamaged,
    })
    if (this.state.HP > 0) {setTimeout( () =>
      this.setState({  
    bossNormal: this.state.bossAlive,}),      
    1000
    )}
  };


  //méthode pour actualiser la boite de dialogue et les HP de l'ennemy quand il est mort et revenir à la map à la fin du combat.
  handleDamage = () => {
    if (this.state.HP < 0) {
      this.setState({
        HP: 150,
        dialog: 'Ennemy Debugged',
        isDead: true,
        showPopup: false
      })
      setTimeout( ()=>
      this.props.newMap(this.state.previousMap), 1000)
    } 
  }


 // méthode qui gère quand l'ennemy attaque et l'animation de l'avatar
  enemyAttack = () => {
    const newhpPlayer = this.state.HpPlayer- (Math.floor(Math.random() * 100));
    this.setState({        
      HpPlayer: newhpPlayer,
      dialog: "Browser attacked you",
      avatarNormal: this.state.avatarDamaged,
      
})
if (this.state.HpPlayer > 0) {setTimeout( () =>
  this.setState({  
avatarNormal: this.state.avatarAlive}),      
1000
)}}

// méthode pour faire apparaitre la popup
handlePop = (isHere) =>{
  this.setState({showPopup: isHere})
}


// méthode pour mettre un pop up game over
handleGameover = (event) => {alert('Game over')}


  //pour fuir
  escape=()=>{
    this.setState({escape: true})
  }

// update les HP du player quand il est attaqué et gère le git.ignore
  componentDidUpdate(prevProps, prevState) {
    if (prevState.HP !== this.state.HP) {
      setTimeout( () =>
        this.enemyAttack(),        
        1000
      )
    } 
    if (this.state.escape=== true){
      this.setState({escape: false,
                      dialog: 'You cannot escape'})

    }
    if (this.state.HpPlayer < 0) {
      this.setState({
        HpPlayer: 0,
        dialog: 'Player defeated',
        avatarIsDead:true,
        showPopup: false,
      }) 
      setTimeout( () =>
        this.handleGameover(),200        
       
      )
  }}
  


  render() {
    return (
      <div className="App">
        <div className='game-area'>

          <div className='enemystatus-area'>
            <CommandsBoss escape={this.escape} showPopup={this.handlePop}/>
            {this.state.showPopup ? (<PopupBoss newHPClicked={this.newHPClickedChild} />) : (console.log('nothing'))}
            <div className="meta-area">
              <EnemyBoss name={'Browser'} HP={this.state.HP} onChange={this.handleDamage()} />
              <img className='Browser' src={this.state.bossNormal} alt='Browser'/>
            </div>
          </div>
          <div className='playerstatus-area'>
            <div className='avatar-area'>
              <img className='avatar'  src={this.state.avatarIsDead ? this.state.avatarDead : this.state.avatarNormal} alt='Avatar'></img>
              <PlayerBoss  HpPlayer={this.state.HpPlayer} />
            </div>
            <div className='dialog-area'>


              <DialogBoss dialog={this.state.dialog} onChange={ this.handleDamage()} />


            </div>




          </div>
        </div>
      </div>
    );

  }

}

export default BattlescreenBoss;
