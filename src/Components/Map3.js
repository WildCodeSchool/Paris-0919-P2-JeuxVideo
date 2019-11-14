// Import librairies
import React from 'react'

// Import CSS
import './Map.css'

class Map3 extends React.Component {
    state = {
        textureDatas: '',
        abdou: './Database/assets/abdou.png',
        jenny: './Database/assets/jenny.png',
        goat: './Database/assets/goatmaster.png',
        lockMovement: false,
        top: this.props.top,
        left: this.props.left,
        animation: 'none',
        position: 'top 200px right 300px',
        map: [

            [0, 0, 0, 1, 1, 1, 0, 2, 0, 1, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
            [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
        ]
    }

    // Call the function that changes the player direction, animation and position
    componentDidMount() {
        document.onkeydown = this.onKeyDown
        document.onkeyup = this.onKeyUp
    }

    // active les combats
    componentDidUpdate() {
        if (this.dice === 1) {
            this.props.keepMap(3)
            this.props.newLeft(this.state.left)
            this.props.newTop(this.state.top)
            this.props.newMap(10)
        }
    }

    // Move the character, change its direction & animation
    onKeyDown = (e) => {
        switch (e.keyCode) {
            case 90: //up
            case 38:
                if (this.state.top <= 1 && this.state.left <= 9 && this.state.left >= 6) { //here to block the shortcut
                    this.props.newTop(7)
                    this.props.newLeft(this.state.left - 1)
                    this.props.newMap(4)
                }
                else {
                    if (this.state.position !== 'top 100px right 300px' && !this.state.lockMovement) { 
                        this.setState({ position: 'top 100px right 300px' })
                    }
                    else if (this.state.top > 1 && !this.state.lockMovement && this.state.map[this.state.top - 2][this.state.left - 1] === 0) {
                        this.setState({position : 'top 100px right 400px', top : this.state.top-1})
                        
                        this.dice = Math.floor(Math.random() * 10)
                    }
                }

                break
            case 83: //down
            case 40:
                if (this.state.position !== 'top 400px right 400px' && !this.state.lockMovement) {
                    this.setState({ position: 'top 400px right 400px' })
                }
                else if (this.state.top < 7 && !this.state.lockMovement && this.state.map[this.state.top][this.state.left - 1] === 0) { 
                    const down = this.state.top + 1
                    this.setState({ position: 'top 400px right 300px', top: down })
                    this.dice = Math.floor(Math.random() * 10)
                }
                break
            case 81: // left
            case 37:
                if (this.state.left === 1 && this.state.top === 1) { //here to prevent from taking the shortcut
                    this.props.newLeft(13)
                    this.props.newTop(this.state.top)
                    this.props.newMap(2)
                } else {
                    if (this.state.position !== 'top 300px right 300px' && !this.state.lockMovement) { 
                        this.setState({ position: 'top 300px right 300px' })
                    }
                    else if (this.state.left > 1 && !this.state.lockMovement && this.state.map[this.state.top - 1][this.state.left - 2] === 0) {
                        const left = this.state.left - 1
                        this.setState({ position: 'top 300px right 400px', left: left })
                        this.dice = Math.floor(Math.random()*5)
                    }
                }
                break
            case 68: // right
            case 39:
                if (this.state.position !== 'top 200px right 300px' && !this.state.lockMovement) {
                    this.setState({ position: 'top 200px right 300px', })
                }
                else if (this.state.left < 14 && !this.state.lockMovement && (this.state.map[this.state.top - 1][this.state.left] === 0 || this.state.map[this.state.top - 1][this.state.left] === undefined)) {
                    const right = this.state.left + 1
                    this.setState({ left: right })
                    this.dice = Math.floor(Math.random()*5)
                }
                
                break
            case 88:
            case 69:
                //pour sortir d'une boite de dialogue
                if (this.state.lockMovement === true) {
                    this.stopTalking()
                }
                else if ((this.state.left < 16) && this.state.map[this.state.top - 1][this.state.left] === 2 || this.state.map[this.state.top - 1][this.state.left - 2] === 2 || this.state.map[this.state.top][this.state.left - 1] === 2 || this.state.map[this.state.top - 2][this.state.left - 1] === 2) {
                    this.interactWithNPC()
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
        document.querySelector('.quoteContainer').innerHTML = `<h3>${character.name}</h3> <br> <span>${character.Quote}</span>`
    }

    //pour arrêter de parler
    stopTalking = () => {
        this.setState({ lockMovement: false })
        document.querySelector('.quoteContainer').style.display = 'none'
        document.querySelector('.quoteContainer').innerHTML = ``
    }

    render() {
        console.log(this.state.textureDatas.url)
        return (
            <div className="map_background" style={{
                backgroundImage: `url(${this.props.designMap3.url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="Avatar" style={{ animation: this.state.animation, backgroundPosition: this.state.position, gridColumn: this.state.left, gridRow: this.state.top, zIndex: 0 }}></div>
                <div className="abdou" style={{ backgroundImage: `url(${this.state.abdou})` }}></div>
                <div className="jenny" style={{ backgroundImage: `url(${this.state.jenny})` }}></div>
                <div className="goat" style={{ backgroundImage: `url(${this.state.goat})` }}></div>
            </div>
        )
    }
}

export default Map3