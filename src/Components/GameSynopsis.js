import React from 'react';
import './GameSynopsis.css'


class GameSynopsis extends React.Component {
    render() {
        return (
            <div >
                <h2 class='title_synopsis'> Le jeu </h2>
                <p className='text_synopsis'> King.DOM Quest est un jeu de rôle dans l’univers du code.
                  Le gameplay est inspiré par les classiques japonais des années 80/90 (Dragon Quest, Final Fantasy…). Vous incarnez l’élu, le seul espoir pour sauver le King.DOM.
                  Armé de votre fidèle keyBoardBlade(), parcourez le royaume de King.DOM pour le sauver des Bugs.
                </p>
                <button class='supportButton'>Soutenir le jeu</button>
            </div>
        );
    }
}

export default GameSynopsis;