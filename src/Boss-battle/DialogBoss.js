import React from 'react';
import './DialogBoss.css';

class DialogBoss extends React.Component {

    state = {
        dialog: 'The Boss is here !!'
    }


    render() {
        return (
            <div className="text-area">
                <h3>{this.props.dialog} </h3>
            </div>
        )
    }
}















export default DialogBoss
