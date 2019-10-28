import React from 'react'

import './Avatar.css'

class Avatar extends React.Component {
    state = {
        top: 350,
        left: 650,
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
                if (this.state.top > -10){
                const top = this.state.top - 10
                this.setState({animation: 'upSideMove 1s infinite steps(1, start)', position: 'top 72px right 416px', top: top})}
                break
            case 83:
            case 40:
                if (this.state.top < 630){
                const down = this.state.top + 10
                this.setState({animation: 'downSideMove 1s infinite steps(1, start)', position: 'top 288px right 416px', top : down })}
                break
            case 81:
            case 37:
                if (this.state.left > 0) {
                const left = this.state.left - 10
                this.setState({animation: 'leftSideMove 1s infinite steps(1, start)', position: 'top 216px right 416px', left: left })}
                break
            case 68:
            case 39:
                if (this.state.left < 1250){
                const right = this.state.left + 10
                this.setState({animation: 'rightSideMove 1s infinite steps(1, start)', position: 'top 144px right 416px', left: right })}
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
        console.log(this.state.top)
        return (
            <div>
                <div className="Avatar" style={{animation: this.state.animation, backgroundPosition: this.state.position, top: this.state.top, left: this.state.left }}></div>
            </div>
        )
    }

}
export default Avatar