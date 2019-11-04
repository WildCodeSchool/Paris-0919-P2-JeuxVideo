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
    HP: 150
  }
  newHPClickedChild = neoClickedHP => {
    this.setState({
    HP: neoClickedHP
     })
     this.props.newHPEnemyClicked(neoClickedHP);
    };

  render() {
    console.log(this.state.HP)
    return (
      <div className="App">
       <div className='game-area'>
         
         <div className='enemystatus-area'>
         <Command 
          newHPClicked={this.newHPClickedChild}
           />
         <div className="meta-area">
         <Enemy name={'Meta'}
         newHPEnemyClicked={this.EnemyClicked}/>
            <img className='Meta' src={Meta} alt='Meta'></img>
            
          </div>
         </div>
         <div className='playerstatus-area'>
           <div className='avatar-area'>
         <img className='avatar' src={Avatar} alt='Avatar'></img>
         <Player/>
         </div>
            <div className='dialog-area'>
            
            <Dialog/>
            
            </div>
            
            
            
            
         </div>
       </div>
      </div>
    );

  }
  
}

export default App;
