import React from 'react';
import './GameOver.css'

class GameOver extends React.Component {

    startingScreen = () => {
        this.props.newMap(1)
    }

    render () {

        return (
            <div className = 'GameOver-parent'>
                <div className = 'Thanks'>
                    <h2>Thank you for playing the demo of King.DOM Quest ! </h2>
                    <img src={this.props.gameoverIcon.url} alt = ''/>
                    <p>Unfortunately, the King.DOM is still not safe from bugs... unless ? </p>
                </div>
                
                <div className ='newGame' onClick = { () => this.startingScreen()} >
                    <p>Start a new game</p>
                </div>

            </div>
        )
    }
}

export default GameOver;