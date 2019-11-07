import React from 'react';
import './Commands.css';

class Commands extends React.Component {
    state = {
       isAttacked: false
    }

popUp = () =>{
    this.props.showPopup(true)
}

render() {
    return (
        <>
        <div className="commands-area">
            <h2>Commands</h2>
            <ul >
                <li  id='fight'onClick={this.popUp}>Attack</li>
                <li id='item'>Items</li>
                <li id='escape'>Git.ignore</li>
            </ul> 
        </div>
        </>
    )
}
}

export default Commands
