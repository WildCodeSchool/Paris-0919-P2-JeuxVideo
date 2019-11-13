
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
    startScreen: true,
    textureDatas1: '',
    textureDatas2: '',
    itemsDatas: '',
    soundsDatas: '',
    charactersDatas: ''
  }

  handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      this.setState({ startScreen: false })
    }
  }


  // Use Axios to consume APIs
  componentDidMount() {
    document.onkeypress = this.handleKeyPress
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
              <GameManager></GameManager>
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
