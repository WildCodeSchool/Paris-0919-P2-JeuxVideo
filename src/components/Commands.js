import React from 'react';
import './Commands.css';

class Commands extends React.Component {
    state = {
       HP: 150
    }

attackEnemy = event => {
        const newHP = this.state.HP - (Math.floor(Math.random() * 20));
        this.setState({
            HP: newHP
        }) 
        this.props.newHPClicked(newHP)
}

render() {
    return (
        <div className="commands-area">
            <h2>Commands</h2>
            <ul >
                <li  id='fight' onClick={this.attackEnemy}onMouseEnter={this.colorChange} onMouseLeave={this.colorChange2}>Attack</li>
                <li id='item'>Items</li>
                <li id='escape'>Escape</li>
            </ul>
        </div>
    )
}
}

export default Commands
