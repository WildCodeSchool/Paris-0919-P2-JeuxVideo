import React from 'react'

import './Avatar.css'

class Avatar extends React.Component {
    state = {
        animation: 'none',
        position: 'top 288px right 416px'
    }


    // Start the onKeyDown fonction
    componentDidMount() {

        document.onkeydown = this.onKeyDown
        document.onkeyup = this.onKeyUp
    }

    // Move the character according to the pressed key
    onKeyDown = (e) => {
        switch (e.keyCode) {
            case 90:
            case 38:
                this.setState({animation: 'upSideMove 1s infinite steps(1, start)', position: 'top 72px right 416px'})
                break
            case 83:
            case 40:
                this.setState({animation: 'downSideMove 1s infinite steps(1, start)', position: 'top 288px right 416px' })
                break
            case 81:
            case 37:
                this.setState({animation: 'leftSideMove 1s infinite steps(1, start)', position: 'top 216px right 416px' })
                break
            case 68:
            case 39:
                this.setState({animation: 'rightSideMove 1s infinite steps(1, start)', position: 'top 144px right 416px' })
                break
            default:
                break
        }
    }

    // Deleting the animation on keyUp
    onKeyUp = (e) => {
        if (e.keyCode) {
            this.setState({ animation: 'none' })
        }
    }

    // Rendering the Character
    render() {
        return (
            <div>
                <div className="Avatar" style={{ animation: this.state.animation, backgroundPosition: this.state.position}}></div>
            </div>
        )
    }

}
export default Avatar