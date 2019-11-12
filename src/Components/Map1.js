// Import librairies
import React from 'react'
import Axios from 'axios'

// Import CSS
import './Map.css'



class Map1 extends React.Component {
    state = {
        textureDatas: '',
        lockMovement: false,
        shell: './Database/assets/profshell.png',
        top: this.props.top,
        left: this.props.left,
        animation: 'none',
        position: 'top 288px right 416px',
        map: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1],
            [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1]
        ],
        npc: {
            name: "James Alodan",
            quote: "j'ai mal aux dents"
        }
    }
    // le dés de rencontre
    dice = 0

    // Call the function that changes the player direction, animation and position
    componentDidMount() {
        document.onkeydown = this.onKeyDown
        document.onkeyup = this.onKeyUp
        
        // Texture API
        Axios.get('./Database/map.json')
            // Change JSON into JS object
            .then(response => response.data)
            // Give the texture object to the state
            .then(data => {
                this.setState({ textureDatas: data[0] })
            })
            console.log(this.state.textureDatas)
    }

    // active les combats
    componentDidUpdate() {
        if (this.dice === 1) {
            this.props.keepMap(1)
            this.props.newLeft(this.state.left)
            this.props.newTop(this.state.top)
            this.props.newMap(10)
        }
    }

    // Move the character, change its direction & animation
    onKeyDown = (e) => {
        switch (e.keyCode) {
            case 90:
            case 38:
                if (this.state.position !== 'top 72px right 416px' && !this.state.lockMovement) {
                    this.setState({ position: 'top 72px right 416px' })
                }
                else if (this.state.top > 1 && !this.state.lockMovement && this.state.map[this.state.top - 2][this.state.left - 1] === 0) {
                    this.setState({ top: this.state.top - 1 })
                    this.dice = Math.floor(Math.random() * 10)
                }
                break
            case 83:
            case 40:
                if (this.state.position !== 'top 288px right 416px' && !this.state.lockMovement) {
                    this.setState({ position: 'top 288px right 416px' })
                }
                else if (this.state.top < 9 && this.state.map[this.state.top][this.state.left - 1] === 0) {
                    const down = this.state.top + 1
                    this.setState({ position: 'top 288px right 416px', top: down })
                    this.dice = Math.floor(Math.random() * 10)
                }
                break
            case 81:
            case 37:
                if (this.state.position !== 'top 216px right 416px' && !this.state.lockMovement) {
                    this.setState({ position: 'top 216px right 416px' })
                }
                else if (this.state.left >= 0 && !this.state.lockMovement && (this.state.map[this.state.top - 1][this.state.left - 2] === 0 || this.state.map[this.state.top - 1][this.state.left - 2] === undefined)) {
                    const left = this.state.left - 1
                    this.setState({ position: 'top 216px right 416px', left: left })
                    this.dice = Math.floor(Math.random() * 10)
                }
                break
            case 68:
            case 39:
                if (this.state.position !== 'top 144px right 416px' && !this.state.lockMovement) {
                    this.setState({ position: 'top 144px right 416px', })
                }
                else if (this.state.left < 14 && !this.state.lockMovement && this.state.map[this.state.top - 1][this.state.left] === 0) {
                    const right = this.state.left + 1
                    this.setState({ position: 'top 144px right 416px', left: right })
                    this.dice = Math.floor(Math.random() * 10)
                }
                if (this.state.left > 13) {
                    this.props.newTop(this.state.top)
                    this.props.newLeft(1)
                    this.props.newMap(2)
                }
                break
            case 88:
            case 69:
                if ((this.state.left < 16) && this.state.map[this.state.top - 1][this.state.left] === 2 || this.state.map[this.state.top - 1][this.state.left - 2] === 2 || this.state.map[this.state.top][this.state.left - 1] === 2 || this.state.map[this.state.top - 2][this.state.left - 1] === 2) {
                    this.interactWithNPC()
                }
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

    // Display a quote when interacting with the npc
    interactWithNPC = () => {
        this.setState({ lockMovement: true })
        document.querySelector('.quoteContainer').style.display = 'block'
        document.querySelector('.quoteContainer').innerHTML = `<h5>${this.state.npc.name} :</h5><p>${this.state.npc.quote}</p>`
        setTimeout(() => {
            this.setState({ lockMovement: false })
            document.querySelector('.quoteContainer').style.display = 'none'
            document.querySelector('.quoteContainer').innerHTML = ``
        }, 2500)
    }

    render() {
        return (
            <div className="map_background" style={{
                backgroundImage: `url(${this.state.textureDatas.url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <img className="profshell" src="./Database/assets/profshell.png"/>
                <div className="quoteContainer"></div>
                <div className="Avatar" style={{ animation: this.state.animation, backgroundPosition: this.state.position, gridColumn: this.state.left, gridRow: this.state.top, zIndex: 0 }}></div>

            </div>
        )
    }
}

export default Map1