import React from 'react'

import "./Game-manager.css"
import Map1 from "./Map1"

class GameManager extends React.Component{

    render(){
        return(
            <div className ="Game-area">
                <Map1></Map1>
            </div>
        )
    }
}

export default GameManager