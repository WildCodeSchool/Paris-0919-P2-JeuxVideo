import React from 'react'
import './Map.css'

class Map1 extends React.Component{
    state = {
        top: 6,
        left: 5,
        animation: 'none',
        position: 'top 288px right 416px',
        map: [[0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0]]
    }

    // tout ce qui concerne le déplacement et les anims
    // Start the onKeyDown fonction
    componentDidMount() {
        document.onkeydown = this.onKeyDown
        document.onkeyup = this.onKeyUp
        }
    // componentDidUpdate() {
    //     if (this.state.left === 1){
    //         console.log("yo?")
    //         this.props.newMap(2)    
    //     }
        
    

    // Move the character according to the pressed key
    onKeyDown = (e) => {
        switch (e.keyCode) {
            case 90:
            case 38:
                if (this.state.top > 1){
                if (this.state.map[this.state.top-2][this.state.left-1] === 0){
                const top = this.state.top-1
                this.setState({animation: 'upSideMove 1s infinite steps(1, start)', position: 'top 72px right 416px', top: top})}}
                break
            case 83:
            case 40:
                if (this.state.top <7){
                if (this.state.map[this.state.top][this.state.left-1] === 0){
                const down = this.state.top + 1
                this.setState({animation: 'downSideMove 1s infinite steps(1, start)', position: 'top 288px right 416px', top : down })}}
                break
            case 81:
            case 37:
                if (this.state.left >= -1){
                if (this.state.map[this.state.top-1][this.state.left-2] === 0){
                const left = this.state.left - 1
                this.setState({animation: 'leftSideMove 1s infinite steps(1, start)', position: 'top 216px right 416px', left: left })}}
                if (this.state.left === 1){
                    
                    this.props.newMap(2)    
                }
                break
            case 68:
            case 39:
                if (this.state.left < 13){
                if (this.state.map[this.state.top-1][this.state.left] === 0){
                const right = this.state.left + 1
                this.setState({animation: 'rightSideMove 1s infinite steps(1, start)', position: 'top 144px right 416px', left: right })}}
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


    render(){
        return(
            <div className="map_background">
                <div className = 'obstacle'></div>
                <div className = 'obstacle2'></div>
                <div className="Avatar" style={{animation: this.state.animation, backgroundPosition: this.state.position, gridColumn: this.state.left, gridRow: this.state.top, zIndex:0 }}></div>       

            </div>
        )
    }
}

export default Map1