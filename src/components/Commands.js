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

render() {
    return (
        <div className="commands-area">
            <h2>Commands</h2>
            <ul>
                <li className="fight" onClick={this.attackEnemy}>Attack</li>
                <li>Items</li>
                <li>Escape</li>
            </ul>
        </div>
    )
}
}

export default Commands
