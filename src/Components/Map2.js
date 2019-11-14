// Import librairies
import React from 'react'

// Import CSS
import './Map.css'

class Map2 extends React.Component {
    state = {
        lockMovement: false,
        top: this.props.top,
        left: this.props.left,
        animation: 'none',
        position: 'top 288px right 416px',
        map: [

            [1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
            [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 1, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 0, 1, 3, 1, 1, 1]
        ],
        // npcsPositions: ['7', '8', '9']
    }

    // Call the function that changes the player direction, animation and position
    componentDidMount() {
        document.onkeydown = this.onKeyDown
        document.onkeyup = this.onKeyUp
    }

    // active les combats
    componentDidUpdate() {
        if (this.dice === 1) {
            this.props.keepMap(2)
            this.props.newLeft(this.state.left)
            this.props.newTop(this.state.top)
            this.props.newMap(10)
        }
    }

    // Move the character, change its direction & animation
    onKeyDown = (e) => {
        e.preventDefault()
        switch (e.keyCode) {
            case 90:
            case 38:
                if (this.state.position !== 'top 72px right 416px' && !this.state.lockMovement) {
                    this.setState({ animation: 'upSideMove 1s infinite steps(1, start)', position: 'top 72px right 416px' })
                }
                else if (this.state.top > 1 && !this.state.lockMovement && this.state.map[this.state.top - 2][this.state.left - 1] === 0) {
                    const top = this.state.top - 1
                    this.setState({ top: top })
                    this.dice = Math.floor(Math.random()*10)

                }
                break
            case 83:
            case 40:
                if (this.state.position !== 'top 288px right 416px' && !this.state.lockMovement) {
                    this.setState({ animation: 'downSideMove 1s infinite steps(1, start)', position: 'top 288px right 416px' })
                }
                else if (this.state.top < 7 && !this.state.lockMovement && this.state.map[this.state.top][this.state.left - 1] === 0) {
                    const down = this.state.top + 1
                    this.setState({ top: down })
                    this.dice = Math.floor(Math.random()*10)

                }
                break
            case 81:
            case 37:
                if (this.state.left === 1) {
                    this.props.newLeft(13)
                    this.props.newTop(this.state.top)
                    this.props.newMap(1)

                } else {
                    if (this.state.position !== 'top 216px right 416px' && !this.state.lockMovement) {
                        this.setState({ animation: 'leftSideMove 1s infinite steps(1, start)', position: 'top 216px right 416px' })
                    }
                    else if (this.state.left > 1 && !this.state.lockMovement && this.state.map[this.state.top - 1][this.state.left - 2] === 0) {
                        const left = this.state.left - 1
                        this.setState({ left: left })
                        this.dice = Math.floor(Math.random()*10)
                    }

                }
                break
            case 68:
            case 39:
                if (this.state.position !== 'top 144px right 416px' && !this.state.lockMovement) {
                    this.setState({ animation: 'rightSideMove 1s infinite steps(1, start)', position: 'top 144px right 416px' })
                }
                else if (this.state.left < 14 && !this.state.lockMovement && (this.state.map[this.state.top - 1][this.state.left] === 0 || this.state.map[this.state.top - 1][this.state.left] === undefined)) {
                    const right = this.state.left + 1
                    this.setState({ left: right })

                    this.dice = Math.floor(Math.random()*10)
                }
                if (this.state.left > 13) {
                    this.props.newTop(this.state.top)
                    this.props.newLeft(1)
                    this.props.newMap(3)

                }
                break
            case 88:
            case 69:
                //pour sortir d'une boite de dialogue
                if (this.state.lockMovement === true) {
                    this.stopTalking()
                }
                //interraction pnj
                else if ((this.state.left < 16) && this.state.map[this.state.top - 1][this.state.left] === 2 || this.state.map[this.state.top - 1][this.state.left - 2] === 2 || this.state.map[this.state.top][this.state.left - 1] === 2 || this.state.map[this.state.top - 2][this.state.left - 1] === 2) {
                    this.interactWithNPC(this.props.characters[9])
                }
                else if
                    ((this.state.left < 16) && this.state.map[this.state.top - 1][this.state.left] === 3 || this.state.map[this.state.top - 1][this.state.left - 2] === 3 || this.state.map[this.state.top][this.state.left - 1] === 3 || this.state.map[this.state.top - 2][this.state.left - 1] === 3) {
                    this.interactWithNPC(this.props.characters[6])
                }
                break
            default:
                break
        }
    }

    // Removing the animation on keyUp
    onKeyUp = (e) => {
        if (e.keyCode) {
            this.setState({ animation: 'none' })
        }
    }

    // Display a quote when interacting with the npc
    interactWithNPC = (character) => {
        this.setState({ lockMovement: true })
        document.querySelector('.quoteContainer').style.display = 'block'
        document.querySelector('.quoteContainer').innerHTML = `<h3>${character.name}</h3> <br> <span>${character.quote}</span>`
    }
    //pour arrêter de parler
    stopTalking = () => {
        this.setState({ lockMovement: false })
        document.querySelector('.quoteContainer').style.display = 'none'
        document.querySelector('.quoteContainer').innerHTML = ``
    }
    

    render() {

        return (
            <div className="map_background" style={{
                backgroundImage: `url(${this.props.designMap2.url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                 <div className="quoteContainer"></div>
                <div className="Avatar" style={{ animation: this.state.animation, backgroundPosition: this.state.position, gridColumn: this.state.left, gridRow: this.state.top, zIndex: 0 }}></div>
                <div className="jenny" style={{ backgroundImage: this.props.characters.length > 0 ? `url(${ this.props.characters[9].image })` : "" }}></div>
                <div className="goat" style={{ backgroundImage: this.props.characters.length > 0 ?`url(${this.props.characters[6].image})` : "" }}></div>
                
            </div>
        )
    }
}

export default Map2