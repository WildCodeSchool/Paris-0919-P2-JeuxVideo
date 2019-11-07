import React from 'react'

import "./Game-manager.css"
import Map1 from "./Map1"
import Map2 from "./Map2"

class GameManager extends React.Component {
    state = {
        currentMap: 1,
        top: 3,
        left: 6
    }

    // change la map
    newDisplay = (changeMap) => {
        this.setState({ currentMap: changeMap })
    }
    // change le top
    changeTop = (newTop) => {
        this.setState({ top: newTop })
    }

    //change le left
    changeLeft = (newLeft) => {
        this.setState({ left: newLeft })
    }

    render() {
        switch (this.state.currentMap) {
            case 1:
                console.log(this.props.designMap1)
                return (
                    <div className="Game-area">
                        <Map1 designMap1={this.props.designMap1} newMap={this.newDisplay} top={this.state.top} left={this.state.left} newTop={this.changeTop} newLeft={this.changeLeft} ></Map1>
                    </div>
                )
            case 2:
                return (
                    <div className="Game-area">
                        <Map2 newMap={this.newDisplay} top={this.state.top} left={this.state.left} newTop={this.changeTop} newLeft={this.changeLeft}></Map2>
                    </div>
                )
            default:
                console.log("oups")
        }

    }
}


export default GameManager