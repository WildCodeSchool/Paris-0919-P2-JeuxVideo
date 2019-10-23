import React from 'react';
import './Footer.css';
import LogoTwitter from './twitter.svg';
import LogoFb from './facebook-logo.svg';
import LogoInsta from './instagram-logo.svg';


class Footer extends React.Component {
    render() {
        return (
            <div >
                <footer className='footerTest' >
                    <p className='mailStudio'>ragegitstudio@ragegit.com</p>

                    <ul className='listeFooter'>
                        <li className='elmtSns'><img className='snsImg' src={LogoInsta} alt='logo instagram' /></li>
                        <li className='elmtSns'><img className='snsImg' src={LogoFb} alt='logo facebook' /></li>
                        <li className='elmtSns'><img className='snsImg' src={LogoTwitter} alt='logo twitter' /></li>
                    </ul>

                </footer>
            </div>
        )
    }
}


export default Footer;

