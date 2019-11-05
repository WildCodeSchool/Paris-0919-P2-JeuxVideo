import React from 'react';
import './Commands.css';

class Commands extends React.Component {
    state = {
       HP: 150
    }

attackEnemy = event => {
        const newHP = this.state.HP - 10;
        this.setState({
            HP: newHP
        }) 
        this.props.newHPClicked(newHP)
}

colorChange = event => {
    document.getElementById('fight').style.color='white'
}
colorChange2 = event => {
    document.getElementById('fight').style.color='black'
}
render() {
    return (
        <div className="commands-area">
            <h2>Commands</h2>
            <ul >
                <li  id='fight' onClick={this.attackEnemy}onMouseEnter={this.colorChange} onMouseLeave={this.colorChange2}>Attack</li>
                <li onMouseEnter={this.colorChange} onMouseLeave={this.colorChange2}>Items</li>
                <li  onMouseEnter={this.colorChange} onMouseLeave={this.colorChange2}>Escape</li>
            </ul>
        </div>
    )
}
}

export default Commands
