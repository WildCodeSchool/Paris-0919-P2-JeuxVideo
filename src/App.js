
import React from 'react';
import Axios from 'axios'
import './App.css';
import GameSynopsis from './Components/GameSynopsis'

import Header from './Components/Header'
import Ecran from './Components/Ecran'
import ContactForm from './Components/ContactForm'
import Kickstarter from './Components/Kickstarter'
import AboutTeam from './Components/AboutTeam'
import Carousel from './Components/Carousel'
import Footer from './Components/Footer'
import StartScreen from './Components/StartScreen';
import StartMenu from './Components/StartMenu';
import Options from './Components/Options';

class App extends React.Component {
  state = {
    startScreen: true,
    textureDatas1:'',
    textureDatas2:'',
    itemsDatas: '',
    soundsDatas: '',
    charactersDatas: ''
  }

  componentDidMount() {
    document.onkeypress = this.handleKeyPress
  }

  handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      this.setState({startScreen: false})
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
      this.setState({ textureDatas1: data[0] })
    })

    // Texture API
    Axios.get('./Database/map.json')
    // Change JSON into JS object
    .then(response => response.data)
    // Give the texture object to the state
    .then(data => {
      this.setState({ textureDatas2: data[1] })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <GameSynopsis/>
        <Ecran />
        {this.state.startScreen ? <StartScreen /> : <StartMenu />}
        <Kickstarter />
        <AboutTeam />
        <Carousel />
        <ContactForm/>
        <Footer />      
      </div>
    );
  }
};

export default App;
