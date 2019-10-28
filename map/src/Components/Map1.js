import React from 'react'

import './Map.css'
import Avatar from './Avatar'

class Map1 extends React.Component{
    state = {
        // coordonnées de départ du personnage
        top: '650px',
        left:'350px'
    }
    render(){
        return(
            <div className="map_background">
                <Avatar style = {{top : this.state.top, left: this.state.left}}></Avatar>
            </div>
        )
    }
}

export default Map1