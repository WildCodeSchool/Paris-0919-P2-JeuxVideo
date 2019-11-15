// Import librairies
import React from 'react'

// Import CSS
import './Map.css'

class Map4 extends React.Component {
    state = {
        textureDatas: '',
        lockMovement: false,
        top: this.props.top,
        left: this.props.left,
        animation: 'none',
        position: 'top 100px right 300px',
        // browser : this.props.chara.find(item => item.id === 11),
        map: [

            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    }


    // Call the function that changes the player direction, animation and position
    componentDidMount() {
        document.onkeydown = this.onKeyDown
        document.onkeyup = this.onKeyUp
    }

    // Move the character, change its direction & animation
    onKeyDown = (e) => {
        e.preventDefault()
        switch (e.keyCode) {
            case 90: //up
            case 38:
                if (this.state.position !== 'top 100px right 300px' && !this.state.lockMovement) {
                    this.setState({ position: 'top 100px right 300px' })
                }
                else if (this.state.top > 1 && !this.state.lockMovement && this.state.map[this.state.top - 2][this.state.left - 1] === 0) {
                    this.setState({position : 'top 100px right 400px', top : this.state.top-1})
                }
                
                break
            case 83: //down
            case 40:
                if (this.state.top > 6 && this.state.left <= 8 && this.state.left >= 6) { // here to prevent the shortcut
                    this.props.newTop(1)
                    this.props.newLeft(this.state.left + 1)
                    this.props.newMap(3)
                }
                if (this.state.position !== 'top 400px right 400px' && !this.state.lockMovement) {
                    this.setState({ position: 'top 400px right 400px' })
                }
                else if (this.state.top < 7 && !this.state.lockMovement && this.state.map[this.state.top][this.state.left - 1] === 0) {
                    const down = this.state.top + 1
                    this.setState({ position: 'top 400px right 300px', top: down })
                }
                break
            case 81: //left
            case 37:
                {
                    if (this.state.position !== 'top 300px right 300px' && !this.state.lockMovement) {
                        this.setState({ position: 'top 300px right 300px' })
                    }
                    else if (this.state.left > 1 && !this.state.lockMovement && this.state.map[this.state.top - 1][this.state.left - 2] === 0) {
                        const left = this.state.left - 1
                        this.setState({ position: 'top 300px right 400px', left: left })
                    }
                }
                break
            case 68: //right
            case 39:
                if (this.state.position !== 'top 200px right 300px' && !this.state.lockMovement) {
                    this.setState({ position: 'top 200px right 300px', })
                }
                else if (this.state.left < 14 && !this.state.lockMovement && (this.state.map[this.state.top - 1][this.state.left] === 0 || this.state.map[this.state.top - 1][this.state.left] === undefined)) {
                    const right = this.state.left + 1
                    this.setState({ position: 'top 200px right 400px', left: right })
                }
                
                break
            case 88:
            case 69:
                //pour sortir d'une boite de dialogue
                if (this.state.lockMovement === true) {
                    this.stopTalking()
                }
                else if ((this.state.left < 16) && this.state.map[this.state.top - 1][this.state.left] === 2 || this.state.map[this.state.top - 1][this.state.left - 2] === 2 || this.state.map[this.state.top][this.state.left - 1] === 2 || this.state.map[this.state.top - 2][this.state.left - 1] === 2) {
                    this.interactWithNPC(this.props.characters[10])
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
        this.props.newMap(11)
    }

    render() {
        console.log()
        return (
            <div className="map_background" style={{
                backgroundImage: `url(${this.props.designMap4.url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="quoteContainer"></div>
                <div className="Avatar" style={{ animation: this.state.animation, backgroundPosition: this.state.position, gridColumn: this.state.left, gridRow: this.state.top, zIndex: 0 }}></div>
                <div className="browser" style={{backgroundImage: this.props.characters.length > 0 ?`url(${this.props.characters[10].image})` : "" }}></div>
                
                
            </div>
        )
    }
}

export default Map4