import React from 'react';
import './PopupBoss.css';


class Popup extends React.Component {
    state = {
            HP: 666,
         }

    battleDice = 0

    attackEnemy = event => {
            this.battleDice = Math.floor(Math.random()*15)
            if (this.battleDice > 3){
             const newHP = this.state.HP - 50;
             this.setState({
                 HP: newHP,
             }) 
             this.props.newHPClicked(newHP)}
             else {
                 this.props.dialog("Your attack failed")
             }
     }

     attackEnemy2 = event => {
        this.battleDice = Math.floor(Math.random()*8)
        if (this.battleDice > 2){
        const newHP = this.state.HP - (Math.floor(Math.random() * (50-30))+30);
        this.setState({
            HP: newHP,
        }) 
        this.props.newHPClicked(newHP)}
        else {
            this.props.dialog("Your attack failed")
        }
}

//     attackEnemy3 = event => {
//     const newHP = this.state.HP - (Math.floor(Math.random() * 1000));
//     this.setState({
//         HP: newHP,
//     }) 
//     this.props.newHPClicked(newHP)
// }
     

 
 render() {
     return (
         <div className="popup-area">
             <ul >
                 <li className='help' onClick={this.attackEnemy}>HackDoken</li>
                 <li className='help' onClick={this.attackEnemy2} >Omni/</li>
                 {/* <li className='help' onClick={this.attackEnemy3}>One punch frame</li> */}
             </ul>
         </div>
     )
 }
 }











export default Popup