import React from 'react';
import './GameSynopsis.css'


class GameSynopsis extends React.Component {
    render() {
        return (
            <div className ="synopsis_parent" >
                <h2 className='title_synopsis'>&lt; Le jeu &gt;</h2>
                <div className='text_synopsis'> King.DOM Quest est un jeu de rôle dans l’univers du code.
                  Le gameplay est inspiré par les classiques japonais des années 80/90 (Dragon Quest, Final Fantasy…).
                </div>
                <div className='text_synopsis'> Vous incarnez l’élu, le seul espoir pour sauver le King.DOM.
                  Armé de votre fidèle keyBoardBlade(), parcourez le royaume de King.DOM pour le sauver des Bugs.
                </div>
                <div className="supportButtonParent">
                    <button className='supportButton'>Soutenir le jeu</button>
                </div>
                
            </div>
        );
    }
}

export default GameSynopsis;