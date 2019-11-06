import React from 'react';
import './Popup.css';


class Popup extends React.Component {
    state = {
            HP: 150,
         }
     
    attackEnemy = event => {
             const newHP = this.state.HP - (Math.floor(Math.random() * 20));
             this.setState({
                 HP: newHP,
             }) 
             this.props.newHPClicked(newHP)
     }
     

 
 render() {
     return (
         <div className="popup-area">
             <ul >
                 <li className='help' onClick={this.attackEnemy}>HackDoken</li>
                 <li className='help' onClick={this.attackEnemy} >Omni/</li>
                 <li className='help' onClick={this.attackEnemy}>One punch frame</li>
             </ul>
         </div>
     )
 }
 }


















export default Popup