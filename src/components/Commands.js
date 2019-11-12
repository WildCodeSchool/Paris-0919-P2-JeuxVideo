import React from 'react';
import './Commands.css';

class Commands extends React.Component {
    state = {
       isAttacked: false,
       previousMap: this.props.previousMap
    }

popUp = () =>{
    this.props.showPopup(true)
}

escape= () =>{
    this.props.escape(true)
}

render() {
    return (
        <>
        <div className="commands-area">
            <h2>Commands</h2>
            <ul >
                <li  id='fight'onClick={this.popUp}>Attack</li>
                <li id='item'>Items</li>
                <li id='escape' onClick={this.escape}>Git.ignore</li>
            </ul> 
        </div>
        </>
    )
}
}

export default Commands
