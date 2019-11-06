import React from 'react';
import './Commands.css';
import Popup from './Popup';

class Commands extends React.Component {
    state = {
       isAttacked: false
    }

attackEnemy = event => {
        const newHP = this.state.HP - (Math.floor(Math.random() * 20));
        this.setState({
            isAttacked: true
        }) 
}

render() {
    return (
        <>
        <div className="commands-area">
            <h2>Commands</h2>
            <ul >
                <li  id='fight' onClick={this.attackEnemy}>Attack</li>
                <li id='item'>Items</li>
                <li id='escape'>Git.ignore</li>
            </ul> 
        </div>
        </>
    )
}
}

export default Commands
