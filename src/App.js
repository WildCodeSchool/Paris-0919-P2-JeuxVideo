import React from 'react';

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
    startScreen: true
  }

  componentDidMount() {
    document.onkeypress = this.handleKeyPress
  }

  handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      this.setState({startScreen: false})
    } 
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