import React from 'react';

import './Player.css';

class Player extends React.Component {



render() {
    return (
        <div className="player-area">
            <h2>Avatar</h2>
            <p>HP: {this.props.HpPlayer}</p>
        </div>
    )
}
}















export default Player
