import React from 'react';

import './Enemy.css';

class Enemy extends React.Component {
    state = {
        HP: 150,
    }

// EnemyClicked = EnemyHP => {
//         this.setState({
//         HP: EnemyHP
//          })}

render() {
    return (
        <>
        <div className="enemy-area">
            <h2>{this.props.name}</h2>
            <p>HP: {this.props.HP}</p>
        </div>
        </>
    )
}
}













export default Enemy
