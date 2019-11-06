import React from 'react';
import './App.css';
import Axios from 'axios'
import GameManager from './Components/Game-manager'


export default class App extends React.Component {

  // Initialize states
  state = {
    textureDatas:''
  }

  // Use Axios to consume APIs
  componentDidMount() {

    // Texture API
    Axios.get('./Database/map.json')
      // Change JSON into JS object
      .then(response => response.data)
      // Give the texture object to the state
      .then(data => {
        this.setState({ textureDatas: data[0] })
      })
  }

  render() {

    return (
      <div className="App">
        <GameManager designMap1={this.state.textureDatas} />
      </div>
    );
  }
}

