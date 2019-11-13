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
        position: 'top 288px right 416px',
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
        switch (e.keyCode) {
            case 90:
            case 38:
                if (this.state.position !== 'top 72px right 416px' && !this.state.lockMovement) {
                    this.setState({ animation: 'upSideMove 1s infinite steps(1, start)', position: 'top 72px right 416px' })
                }
                else if (this.state.top > 1 && !this.state.lockMovement && this.state.map[this.state.top - 2][this.state.left - 1] === 0) {
                    const top = this.state.top - 1
                    this.setState({ top: top })
                    // this.dice = Math.floor(Math.random()*5)
                }
                // if (this.state.top > 7) {
                //     this.props.newTop( 7 )
                //     this.props.newLeft(this.state.left)
                //     this.props.newMap(4)
                // }
                break
            case 83:
            case 40:
                if (this.state.top > 6) {
                    this.props.newTop(1)
                    this.props.newLeft(this.state.left)
                    this.props.newMap(3)
                }
                if (this.state.position !== 'top 288px right 416px' && !this.state.lockMovement) {
                    this.setState({ animation: 'downSideMove 1s infinite steps(1, start)', position: 'top 288px right 416px' })
                }
                else if (this.state.top < 7 && !this.state.lockMovement && this.state.map[this.state.top][this.state.left - 1] === 0) {
                    const down = this.state.top + 1
                    this.setState({ top: down })
                    // this.dice = Math.floor(Math.random()*5)
                }
                break
            case 81:
            case 37:
                {
                    if (this.state.position !== 'top 216px right 416px' && !this.state.lockMovement) {
                        this.setState({ animation: 'leftSideMove 1s infinite steps(1, start)', position: 'top 216px right 416px' })
                    }
                    else if (this.state.left > 1 && !this.state.lockMovement && this.state.map[this.state.top - 1][this.state.left - 2] === 0) {
                        const left = this.state.left - 1
                        this.setState({ left: left })
                        // this.dice = Math.floor(Math.random()*5)
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
                    // this.dice = Math.floor(Math.random()*5)
                }
                if (this.state.left > 13) {
                    this.props.newTop(this.state.top)
                    this.props.newLeft(1)
                    this.props.newMap(3)
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
        console.log()
        return (
            <div className="map_background" style={{
                backgroundImage: `url(${this.props.designMap4.url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>

                <div className="Avatar" style={{ animation: this.state.animation, backgroundPosition: this.state.position, gridColumn: this.state.left, gridRow: this.state.top, zIndex: 0 }}></div>




            </div>
        )
    }
}

export default Map4