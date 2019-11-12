// Import librairies
import React from 'react'
import Axios from 'axios'

// Import CSS
import './Map.css'

class Map2 extends React.Component {
    state = {
        textureDatas: '',
        abdou: './Database/assets/abdou.png',
        jenny:'./Database/assets/jenny.png',
        goat: './Database/assets/goatmaster.png',
        lockMovement: false,
        top: this.props.top,
        left: this.props.left,
        animation: 'none',
        position: 'top 288px right 416px',
        map: [

            [1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 0, 1, 1],
            [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
            [1, 0, 1, 1, 1, 0, 0, 0, 2, 0, 0, 1, 1],
            [0, 0, 1, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1]
        ]
    }

    // Call the function that changes the player direction, animation and position
    componentDidMount() {
        document.onkeydown = this.onKeyDown
        document.onkeyup = this.onKeyUp

        Axios.get('./Database/map.json')
            // Change JSON into JS object
            .then(response => response.data)
            // Give the texture object to the state
            .then(data => {
                this.setState({ textureDatas: data[1] })
            })
    }

        // active les combats
        componentDidUpdate(){
            if (this.dice === 1){
                this.props.keepMap(2)
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
                } else{
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

    // Removing the animation on keyUp
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
        console.log(this.state.textureDatas.url)
        return (
            <div className="map_background" style={{
                backgroundImage: `url(${this.state.textureDatas.url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="Avatar" style={{ animation: this.state.animation, backgroundPosition: this.state.position, gridColumn: this.state.left, gridRow: this.state.top, zIndex: 0 }}></div>
                <div className="abdou" style={{backgroundImage: `url(${this.state.abdou})`}}></div>
                <div className="jenny" style={{backgroundImage: `url(${this.state.jenny})`}}></div>
                <div className="goat" style={{backgroundImage: `url(${this.state.goat})`}}></div>
            </div>
        )
    }
}

export default Map2