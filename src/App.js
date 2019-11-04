import React from 'react';
import Player from './components/Player'
import Enemy from './components/Enemy'
import Meta from './components/meta1_animated.gif'
import Avatar from './components/avatar_animated.gif'
import Command from './components/Commands'
import Dialog from './components/Dialog'
import './App.css';


class App extends React.Component {
  state = {
    HP: 150,
    Dialog: "",

  }
  newHPClickedChild = neoClickedHP => {
    this.setState({
      HP: neoClickedHP
    })
  };

//   newDialog = () => {
//     if (this.state.HP === 0)
//     { const neoDialog = "Ennemi Débuggé"
//     this.setState({
//       Dialog: neoDialog
//     })
//   }
// }



  // // componentDidUpdate() {
  //   if (this.state.HP === 0) {
  //     const newDialog = "Ennemi Débuggé"
  //     this.setState({
  //       Dialog: newDialog
  //     })
  //   }
  // // }

  // // Ici, notre méthode pour actualiser la boite de dialogue.
  // handleDamage = () => {
  //   if (this.state.HP === 0) {
  //     const newDialog = "Ennemi Débuggé"   
  //     this.setState({
  //       Dialog: newDialog
  //     })
  //     //  document.querySelector('text')
  //     // console.log("lol")
  //   }
  // }



  render() {
    return (
      <div className="App">
        <div className='game-area'>

          <div className='enemystatus-area'>
            <Command
              newHPClicked={this.newHPClickedChild}
            />
            <div className="meta-area">
              <Enemy name={'Meta'} HP={this.state.HP} onChange={this.componentDidUpdate} />


              <img className='Meta' src={Meta} alt='Meta'></img>

            </div>
          </div>
          <div className='playerstatus-area'>
            <div className='avatar-area'>
              <img className='avatar' src={Avatar} alt='Avatar'></img>
              <Player />
            </div>
            <div className='dialog-area'>


              <Dialog 
              />

            </div>




          </div>
        </div>
      </div>
    );

  }

}

export default App;
