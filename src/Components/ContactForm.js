import React from 'react';

import './ContactForm.css'

class ContactForm extends React.Component {

    state = {
        email : "Ton email",
        inquiry : "J'ai une question à propos de...",
        message : "Message"

    }

    /*Email area */

    handleChangeMail = this.handleChangeMail.bind(this);
    handleClickMail = this.handleClickMail.bind(this);
    handleNoMail = this.handleNoMail.bind(this);

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

    // when user doesn't input any infos, default infos is displayed
    handleNoMail(event) {
        if (event.target.value === '') {
            this.setState({
                email : 'Ton email'
            })

            document.getElementById('email').style.color = "grey";
        }
    }

    /*Inquiry area */

    handleChangeInquiry = this.handleChangeInquiry.bind(this);
    handleClickInquiry = this.handleClickInquiry.bind(this);
    handleNoInquiry = this.handleNoInquiry.bind(this);

    
    handleClickInquiry(event) {
        this.setState({
            inquiry : ''
        })            
    }

    
    handleChangeInquiry(event) {
        
        this.setState({
            inquiry : event.target.value
        })

        document.getElementById('inquiry').style.color = "#F9F9F9";
    }

    
    handleNoInquiry(event) {
        if (event.target.value === '') {
            this.setState({
                inquiry : "J'ai une question à propos de..."
            })

            document.getElementById('inquiry').style.color = "grey";
        }
    }

   
    /*Message area */
    handleChangeMessage = this.handleChangeMessage.bind(this);
    handleClickMessage = this.handleClickMessage.bind(this);
    handleNoMessage = this.handleNoMessage.bind(this);
    

    // same as email but with text message
    handleClickMessage(event) {
        
        this.setState({
            message : ''
        })            
    }

    
    handleChangeMessage(event) {

        this.setState({
            message : event.target.value,           
        })

        document.getElementById('message').style.color = "#F9F9F9";
    }


    handleNoMessage(event) {
        if (event.target.value === '') {
            this.setState({
                message : 'Message'
            })

            document.getElementById('message').style.color = "grey";
        }
    }

    /* Button */

    handleClickButton = this.handleClickButton.bind(this);

    // user cant send form if either mail or message are at default state + red indicator
    handleClickButton(event) {
        if (this.state.email === 'Ton email')  {
            document.getElementById('email').style.border = '3px solid red';
            event.preventDefault();
        };

        if (this.state.message === 'Message')  {
            document.getElementById('message').style.border = '3px solid red';
            event.preventDefault();
        };
    }

    render() {
        return (
            <div className = 'contactParent'>
                <div className = 'test'>
                    <h2 className ="contactTitle">&lt; Contact &gt;</h2>               
                    <form className='contactForm'>
                        <input className='inputFieldMail'
                            id='email'
                            type='text'
                            value= {this.state.email}
                            onClick = {this.handleClickMail}
                            onChange={this.handleChangeMail}
                            onMouseOut = {this.handleNoMail}
                        />
                        <input className='inputFieldInquiry'
                            id='inquiry'
                            type='text'
                            value={this.state.inquiry}
                            onClick = {this.handleClickInquiry}
                            onChange={this.handleChangeInquiry}
                            onMouseOut = {this.handleNoInquiry}
                            
                            

                        />
                        <textarea className='inputFieldMessage'
                            id='message'
                            type='text'
                            value={this.state.message}
                            onClick = {this.handleClickMessage}
                            onChange={this.handleChangeMessage}
                            onMouseOut = {this.handleNoMessage}
                        />

                        <button className = 'formButton' onClick={this.handleClickButton}>Envoyer</button>
                    </form>
                </div>
                

                

            </div>
        )
    }

}


export default ContactForm;