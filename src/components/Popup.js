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

     attackEnemy2 = event => {
        const newHP = this.state.HP - (Math.floor(Math.random() * 50));
        this.setState({
            HP: newHP,
        }) 
        this.props.newHPClicked(newHP)
}

    attackEnemy3 = event => {
    const newHP = this.state.HP - (Math.floor(Math.random() * 1000));
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
                 <li className='help' onClick={this.attackEnemy2} >Omni/</li>
                 <li className='help' onClick={this.attackEnemy3}>One punch frame</li>
             </ul>
         </div>
     )
 }
 }


















export default Popup