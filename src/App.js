
// Import librairies
import React from 'react'
import Axios from 'axios'

import './App.css'

import GameManager from './Components/Game-manager'

export default class App extends React.Component {

  // Initialize states
  state = {
    textureDatas1:'',
    textureDatas2:'',
    textureDatas3 : '',
    textureDatas4:'',
    itemsDatas: '',
    soundsDatas: '',
    charactersDatas: ''
  }
  
  // Use Axios to consume APIs
  componentDidMount() {
    
  
      
      // Item API
      Axios.get('./database/items.json')
      // Change JSON into JS object
      .then(response => response.data)
      // Give the texture object to the state
      .then(data => {
        this.setState({ itemsDatas: data })
      })
      
      // Sound API
      Axios.get('./database/characters.json')
      // Change JSON into JS object
      .then(response => response.data)
      // Give the texture object to the state
      .then(data => {
        this.setState({ soundsDatas: data })
      })
      
      // Texture API
    Axios.get('./Database/map.json')
    // Change JSON into JS object
    .then(response => response.data)
    // Give the texture object to the state
    .then(data => {
      this.setState({
        textureDatas1: data[0],
        textureDatas2: data[1],
        textureDatas3 : data[3],
        textureDatas4: data[4]
      })
    })

  }

  render() {
    return (
      <div className="App">
         <GameManager designMap1={this.state.textureDatas1} designMap2={this.state.textureDatas2} designMap3={this.state.textureDatas3} designMap4={this.state.textureDatas4} />
      </div>
    );
  }
}
