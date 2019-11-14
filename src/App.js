
import React from 'react';
import Axios from 'axios'
import './App.css';
import GameSynopsis from './Components/GameSynopsis'
import GameManager from "./Components/Game-manager"

import Header from './Components/Header'
import Ecran from './Components/Ecran'
import ContactForm from './Components/ContactForm'
import Kickstarter from './Components/Kickstarter'
import AboutTeam from './Components/AboutTeam'
import Carousel from './Components/Carousel'
import Footer from './Components/Footer'
import StartScreen from './Components/StartScreen';
import StartMenu from './Components/StartMenu';

// importer Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

class App extends React.Component {
  state = {

    textureDatas1:'',
    textureDatas2:'',
    textureDatas3 : '',
    textureDatas4:'',
    itemsDatas: '',
    soundsDatas: '',
    characters: '',
    startScreen: true,
    isReady: false 
  }

  handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      this.setState({ startScreen: false })
    }
  }


  // Use Axios to consume APIs
  componentDidMount() {      
      // Item API
      Axios.get('./Database/items.json')
         // Change JSON into JS object
      .then(response => response.data)
      // Give the texture object to the state
      .then(data => {
        this.setState({ itemsDatas: data })
      })

    document.onkeypress = this.handleKeyPress
    // Item API
       
      // NPC API
      Axios.get('./Database/characters.json')
    // Change JSON into JS object
      .then(response => response.data)
      // Give the texture object to the state
      .then(data => {
        this.setState({ characters: data,
        avatarData : data[0],
        metaData : data[7]})
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
        <Header />
        <GameSynopsis />
        <Ecran />
        <Router>
          <Switch>
            <Route exact path="/">
            {this.state.startScreen ? <StartScreen /> : <StartMenu />}
            </Route>
            <Route path="/game">
              <GameManager designMap1={this.state.textureDatas1} designMap2={this.state.textureDatas2} designMap3={this.state.textureDatas3} designMap4={this.state.textureDatas4} characters={this.state.characters} avatarData = {this.state.avatarData} metaData = {this.state.metaData} />
              
            </Route>
          </Switch>
        </Router>
        <Kickstarter />
        <AboutTeam />
        <Carousel />
        <ContactForm />
        <Footer />

      </div>
    )
  }
}



export default App;
