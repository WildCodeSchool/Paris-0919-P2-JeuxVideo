import React from 'react'

import "./Game-manager.css"
import Map1 from "./Map1"
import Map2 from "./Map2"

class GameManager extends React.Component {
    state = {
        currentMap: 1
    }
    newDisplay = (newMap) => {
        this.setState = ({
            currentMap: newMap
        })
    }

    render() {
        switch (this.state.currentMap) {
            case 1:
                return (
                    <div className="Game-area">
                        <Map1 newMap={this.newDisplay()}></Map1>
                    </div>
                )
                break
            case 2:
                return (
                    <div className="Game-area">
                        <Map2 newMap={this.newDisplay()}></Map2>
                    </div>
                )
                break
        }

    }
}

export default GameManager