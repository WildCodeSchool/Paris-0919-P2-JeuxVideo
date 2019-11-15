import React from 'react'

import "./Game-manager.css"
import Map1 from "./Map1"
import Map2 from "./Map2"
import Map3 from "./Map3"
import Map4 from "./Map4"
import Battlescreen from "../components/Battlescreen"
import BattlescreenBoss from "../Boss-battle/BattlescreenBoss"
import GameOver from './GameOver'

class GameManager extends React.Component {
    state = {
        currentMap: 4,
        keepMap: 0,
        top: 3,
        left: 6
    }

    // change la map
    newDisplay = (changeMap) => {
        this.setState({ currentMap: changeMap })
    }

    // garde la map pour après les combats
    keepMyMap = (map) => {
        this.setState({ keepMap: map })
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
                return (
                    <div className="Game-area">
                        <Map1 avatarData = {this.props.avatarData} keepMap={this.keepMyMap} designMap1={this.props.designMap1} newMap={this.newDisplay} top={this.state.top} left={this.state.left} newTop={this.changeTop} newLeft={this.changeLeft} characters={this.props.characters}/>
                    </div>
                )
            case 2:
                return (
                    <div className="Game-area">
                        <Map2 avatarData = {this.props.avatarData} keepMap={this.keepMyMap} designMap2={this.props.designMap2} newMap={this.newDisplay} top={this.state.top} left={this.state.left} newTop={this.changeTop} newLeft={this.changeLeft} characters={this.props.characters} />
                    </div>
                )

            case 3:
                return (
                    <div className="Game-area">
                        <Map3 avatarData = {this.props.avatarData} keepMap={this.keepMyMap} designMap3={this.props.designMap3} newMap={this.newDisplay} top={this.state.top} left={this.state.left} newTop={this.changeTop} newLeft={this.changeLeft} characters={this.props.characters} />
                    </div>
                )
            case 4:
                return (
                    <div className="Game-area">
                        <Map4 avatarData = {this.props.avatarData} keepMap={this.keepMyMap} designMap4={this.props.designMap4} newMap={this.newDisplay} top={this.state.top} left={this.state.left} newTop={this.changeTop} newLeft={this.changeLeft} characters={this.props.characters} /> 
                    </div>
                )
            case 10:
                console.log(this.state.keepMap)
                return (
                    <div className="Game-area">
                        <Battlescreen avatarData = {this.props.avatarData} metaData = {this.props.metaData} newMap={this.newDisplay} previousMap={this.state.keepMap} />
                    </div>
                )
             case 11:
                    console.log(this.state.keepMap)
                    return (
                        <div className="Game-area">
                            <BattlescreenBoss avatarData = {this.props.avatarData} bossData = {this.props.bossData} newMap={this.newDisplay} previousMap={this.state.keepMap} />
                        </div>
                    )
            case 12: 
                    return (
                        <div className="Game-area">
                            <GameOver newMap={this.newDisplay} previousMap={this.state.keepMap} gameoverIcon ={this.props.gameoverIcon} />
                        </div>
                    )
            default:
                console.log("oups")
        }

    }
}


export default GameManager