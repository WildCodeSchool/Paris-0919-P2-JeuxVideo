import React from 'react';
import './Footer.css';
/*import LogoTwitter from './twitter.svg';
import LogoFb from './facebook-logo.svg';
import LogoInsta from './instagram-logo.svg';*/


class Footer extends React.Component {
    render() {
        return (
            <div >
                <footer className='footerTest' >
                  <p className='mailStudio'>ragegitstudio@ragegit.com</p>

                  <ul className='listeFooter'>
                    <li className='elmtSns'><i className="fab fa-instagram snsImg"></i></li>
                    <li className='elmtSns'><i className="fab fa-facebook-f snsImg"></i></li>
                    <li className='elmtSns'><i className="fab fa-twitter snsImg"></i></li>
                  </ul>

                </footer>
            </div>
        )
    }
}


export default Footer;

