// Import librairies
import React from 'react'
import Axios from 'axios'

import './App.css'

import GameManager from './Components/Game-manager'

export default class App extends React.Component {

  // Initialize states
  state = {
    textureDatas:'',
    itemsDatas: '',
    soundsDatas: '',
    charactersDatas: ''
  }
  
  // Use Axios to consume APIs
  componentDidMount() {
    
    // Texture API
    Axios.get('./database/textures.json')
    // Change JSON into JS object
    .then(response => response.data)
    // Give the texture object to the state
    .then(data => {
      this.setState({ textureDatas: data })
      })
      
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
      
      // Characters API
      Axios.get('./database/sounds.json')
    // Change JSON into JS object
    .then(response => response.data)
    // Give the texture object to the state
    .then(data => {
      this.setState({ charactersDatas: data })
    })
  }

  render() {
    return (
      <div className="App">
          <GameManager/>
      </div>
    );
  }
}
