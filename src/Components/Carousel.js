import React, { Component } from 'react';

import Cyril from './../cyril.png'
import Bruno from'./../bruno.png'
import Steven from './../captain.png'
import Jacqueline from './../oresama.png'
import Kévin from './../kevin.png'
import Flo from './../flo.png'
import Mel from './../mel.png'
import Barbara from './../barbara.png'

import './Carousel.css';

class Carousel extends Component {
  render() {
    return (
      <div id='fighter'>
        <h2>&lt; Choisis ton combattant &gt;</h2>

        <div id='slider'>
          
          <section id='section1'>

            <a id='leftOne' href='#section2'><i className="fas fa-arrow-circle-left"></i></a> 
            
            <div id='one' className='avatars'>
              <p>“C’est au pied du mur qu’on le voit le mieux.“</p>
              <img className='images' id='cyril' src={Cyril} alt='Avatar de Cyril'/>
            </div>

            <div id='two'className='avatars'>
              <p>"J'ai faim."</p>
              <img className='images' id='bruno' src={Bruno} alt='Avatar de Bruno'></img>
            </div>

            <div id='three' className='avatars'>
              <p>"J'apprécie les fruits au sirop."</p>
              <img className='images' id='kévin' src={Kévin} alt='Avatar de Kévin' />
            </div>

            <div id='four' className='avatars'>
              <p>"Le plus important, ce ne sont pas les moyens mais la finalité."</p>
              <img className='images' id='Jacqueline' src={Jacqueline} alt='Avatar de Jacqueline'/>
            </div>

            <a id='rightOne' href='#section2'><i className="fas fa-arrow-circle-right"></i></a>

          </section>

          <section id='section2'>

            <a id='leftTwo' href='#section1'><i className="fas fa-arrow-circle-left"></i></a>

            <div id='five' className='avatars'>
              <p>"Un ours mal léché qui préfère rester chez lui."</p>
              <img className='images' id='steven' src={Steven} alt='Avatar de Steven' />
            </div>

            <div id='six' className='avatars'>
              <p>"Moi, tu sais, je suis c**."</p>
              <img className='images' id='flo' src={Flo} alt='Avatar de Flo' />
            </div>

            <div id='seven' className='avatars'>
              <p>"See you Space Cowboy."</p>
              <img className='images' id='mel' src={Mel} alt='Avatar de Mel' />
            </div>

            <div id='eight' className='avatars'>
              <p>"L'ota court toujours."</p>
              <img className='images' id='barbara' src={Barbara} alt='Avatar de Barbara' />
            </div>

            <a id='rightTwo' href='#section1'><i className="fas fa-arrow-circle-right"></i></a>

          </section>

        </div>
      </div>
    )
  }
}

export default Carousel;