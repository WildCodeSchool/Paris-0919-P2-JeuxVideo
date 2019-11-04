import React from 'react';

import './Player.css';

class Player extends React.Component {
    state = {
        HP: 200
    }


render() {
    return (
        <div className="player-area">
            <h2>Avatar</h2>
            <p>HP : {this.state.HP}</p>
        </div>
    )
}
}















export default Player
