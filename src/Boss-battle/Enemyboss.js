import React from 'react';

import './EnemyBoss.css';

class EnemyBoss extends React.Component {
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













export default EnemyBoss
