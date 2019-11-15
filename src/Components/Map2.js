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
        position: 'top 200px right 300px',
        map: [

            [1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
            [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 0, 1, 3, 1, 1, 1]
        ],
        sounds: []
        // npcsPositions: ['7', '8', '9']
    }

    // Call the function that changes the player direction, animation and position
    componentDidMount() {
        document.onkeydown = this.onKeyDown
        document.onkeyup = this.onKeyUp

        if (this.props.sounds.length > 0) {
            document.querySelector('#Awakenings').volume = 0.5
            document.querySelector("#Awakenings").play()
        }
    }
    // active les combats
    componentDidUpdate() {
        this.spawnBattle()
    }
    spawnBattle = () => {
        if (this.dice === 1) {
            this.blockDeplacement = 1
            document.querySelector('.map_background').style.backgroundImage = ''
            document.querySelector('.map_background').style.animation = "flash 0.65s"
            document.querySelector('.jenny').style.display = 'none'
            document.querySelector('.goat').style.display = 'none'
            setTimeout(() => {  
                this.props.keepMap(2)
                this.props.newLeft(this.state.left)
                this.props.newTop(this.state.top)
                this.props.newMap(10)
            }, 650)
        };
    }


    blockCombat = 0
    blockDeplacement = 0

    // Move the character, change its direction & animation
    onKeyDown = (e) => {
        e.preventDefault()
        switch (e.keyCode) {
            case 90: //up
            case 38:
                if (this.state.position !== 'top 100px right 300px' && this.blockDeplacement===0 && !this.state.lockMovement) { 
                    this.setState({ position: 'top 100px right 300px' })
                }
                else if (this.state.top > 1 && this.blockDeplacement===0 && !this.state.lockMovement && this.state.map[this.state.top - 2][this.state.left - 1] === 0) {
                    this.setState({position : 'top 100px right 400px', top : this.state.top-1})
                    if (this.blockCombat < 4){
                        this.blockCombat += 1
                    }
                    if (this.blockCombat === 4){
                    this.dice = Math.floor(Math.random() * 10)}
                    if (this.props.sounds.length > 0) {
                        document.querySelector('#sonDeLaPitite').play()
                    }
                }
                break
            case 83: // down
            case 40:
                if (this.state.position !== 'top 400px right 400px' && this.blockDeplacement===0 && !this.state.lockMovement) {
                    this.setState({ position: 'top 400px right 400px' })
                }
                else if (this.state.top < 7 && this.blockDeplacement===0 && !this.state.lockMovement && this.state.map[this.state.top][this.state.left - 1] === 0) { 
                    const down = this.state.top + 1
                    this.setState({ position: 'top 400px right 300px', top: down })
                    if (this.blockCombat < 4){
                        this.blockCombat += 1
                    }
                    if (this.blockCombat === 4){
                    this.dice = Math.floor(Math.random() * 10)}
                    if (this.props.sounds.length > 0) {
                        document.querySelector('#sonDeLaPitite').play()
                    }
                }
                break
            case 81: //left
            case 37:
                if (this.state.left === 1) {
                    this.props.newLeft(13)
                    this.props.newTop(this.state.top)
                    this.props.newMap(1)

                } else {
                    if (this.state.position !== 'top 300px right 300px' && this.blockDeplacement===0 && !this.state.lockMovement) { 

                        this.setState({ position: 'top 300px right 300px' })
                    }
                    else if (this.state.left >= 0 && this.blockDeplacement===0 && !this.state.lockMovement && (this.state.map[this.state.top - 1][this.state.left - 2] === 0 || this.state.map[this.state.top - 1][this.state.left - 2] === undefined)) {
                        const left = this.state.left - 1
                        this.setState({ position: 'top 300px right 400px', left: left })
                        if (this.blockCombat < 4){
                            this.blockCombat += 1
                        }
                        if (this.blockCombat === 4){
                        this.dice = Math.floor(Math.random() * 10)}
                        if (this.props.sounds.length > 0) {
                            document.querySelector('#sonDeLaPitite').play()
                        }
                    }

                }
                break
            case 68: //right
            case 39:
                if (this.state.position !== 'top 200px right 300px' && this.blockDeplacement===0 && !this.state.lockMovement) { 
                this.setState({ position: 'top 200px right 300px', })
                }
                else if (this.state.left < 14 && this.blockDeplacement===0 && !this.state.lockMovement && (this.state.map[this.state.top - 1][this.state.left] === 0 || this.state.map[this.state.top - 1][this.state.left] === undefined)) {
                    const right = this.state.left + 1
                    this.setState({ position: 'top 200px right 400px', left: right })
                    if (this.blockCombat < 4){
                        this.blockCombat += 1
                    }
                    if (this.blockCombat === 4){
                    this.dice = Math.floor(Math.random() * 10)}
                    if (this.props.sounds.length > 0) {
                        document.querySelector('#sonDeLaPitite').play()
                    }
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
                    
                /*version sur glitch avatar sprite*/    
                // if (this.state.lockMovement === true) {
                //     this.setState({ lockMovement: false })

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
                {this.props.sounds.length > 0 ? <audio id="sonDeLaPitite" src={this.props.sounds[0].url} /> : ''}
                {this.props.sounds.length > 0 ? <audio canplaythrough loop id="Awakenings" src={this.props.sounds[5].url} /> : ''}
                <div className="quoteContainer"></div>
                <div className="Avatar" style={{ animation: this.state.animation, backgroundPosition: this.state.position, gridColumn: this.state.left, gridRow: this.state.top, zIndex: 0 }}></div>
                <div className="jenny" style={{ backgroundImage: this.props.characters.length > 0 ? `url(${ this.props.characters[9].image })` : "" }}></div>
                <div className="goat" style={{ backgroundImage: this.props.characters.length > 0 ?`url(${this.props.characters[6].image})` : "" }}></div>
                
            </div>
        )
    }
}

export default Map2