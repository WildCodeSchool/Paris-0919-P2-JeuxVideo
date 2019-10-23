import React from 'react';
import './ContactForm.css'

class ContactForm extends React.Component {

    state = {
        email : "Ton email",
        inquiry : "J'ai une question à propos du jeu",
        message : "Message"

    }

    /*Email area */

    handleChangeMail = this.handleChangeMail.bind(this);
    handleClickMail = this.handleClickMail.bind(this);

    // when email field clicked => default message disappears
    handleClickMail(event) {
        this.setState({
            email : ''
        })            
    }

    // email field takes the value inputed in it + color change 
    handleChangeMail(event) {
        
        this.setState({
            email : event.target.value
        })

        document.getElementById('email').style.color = "#F9F9F9";
    }

   

    /*Message area */
    handleChangeMessage = this.handleChangeMessage.bind(this);
    handleClickMessage = this.handleClickMessage.bind(this);
    

    // same as email but with text message
    handleClickMessage(event) {
        
        this.setState({
            message : ''
        })            
    }

    // same as email but with text message
    handleChangeMessage(event) {

        this.setState({
            message : event.target.value,           
        })

        document.getElementById('message').style.color = "#F9F9F9";
    }

    

    render() {
        return (
            <div className = 'contactParent'>
                <h2 className ="contactTitle">Contact</h2>
                <form className='contactForm'>
                    <input className='inputFieldMail'
                        id='email'
                        type='text'
                        value= {this.state.email}
                        onClick = {this.handleClickMail}
                        onChange={this.handleChangeMail}
                    />
                    <input className='inputField'
                        id='reason'
                        type='text'
                        value={this.state.inquiry}
                        

                    />
                    <input className='inputField'
                        id='message'
                        type='text'
                        value={this.state.message}
                        onClick = {this.handleClickMessage}
                        onChange={this.handleChangeMessage}
                    />

                    <button className = 'formButton'>Envoyer</button>

                </form>

            </div>
        )
    }

}


export default ContactForm;