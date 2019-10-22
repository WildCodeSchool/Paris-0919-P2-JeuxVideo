import React from 'react';
import './GameSynopsis.css'


class GameSynopsis extends React.Component {
    render() {
        return (
            <div >
                <h2> Le jeu </h2>
                <p> King.DOM Quest est un jeu de rôle dans l’univers du code.
                  Le gameplay est inspiré par les classiques japonais des années 80/90 (Dragon Quest, Final Fantasy…). Vous incarnez l’élu, le seul espoir pour sauver le King.DOM.
                  Armé de votre fidèle keyBoardBlade(), parcourez le royaume de King.DOM pour le sauver des Bugs.
                </p>
                <button>Soutenir le jeu</button>
            </div>
        );
    }
}

export default GameSynopsis;