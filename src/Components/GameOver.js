import React from 'react';
import './GameOver.css'

class GameOver extends React.Component {
    render () {
        return (
            <div className = 'GameOver-parent'>
                <h2>Thank you for playing the demo of King.DOM Quest ! </h2>
                <img src={this.props.gameoverIcon.url} alt = ''/>
                <p>Unfortunately, today the king.DOM is still not safe from bugs... unless ? </p>
                <div className ='newGame'>
                    <p>Start a new game</p>
                </div>

            </div>
        )
    }
}

export default GameOver;