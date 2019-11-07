import React from 'react';
import './Dialog.css';

class Dialog extends React.Component {

    state = {
        dialog: 'A wild meta appears'
    }


    render() {
        return (
            <div className="text-area">
                <h3>{this.props.dialog} </h3>
            </div>
        )
    }
}















export default Dialog
