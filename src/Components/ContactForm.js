import React from 'react';
import './ContactForm.css'

class ContactForm extends React.Component {

    state = {
        email : "Ton email",
        inquiry : "J'ai une question à propos du jeu",
        message : "Message"

    }

    /*Email area */

    handleChange2 = this.handleChange2.bind(this);

    handleChange2(event) {
        this.setState({
            email : event.target.value
        })
    }

    /*Message area */
    handleChange = this.handleChange.bind(this);

    //cmmz here
    handleChange(event) {
        this.setState({
            message : event.target.value,
            
        })
    }

    

    render() {
        return (
            <div className = 'contactParent'>
                <h2 className ="contactTitle">Contact</h2>
                <form className='contactForm'>
                    <input className='inputField'
                        id='email'
                        type='text'
                        value= {this.state.email}
                        onChange={this.handleChange2}
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
                        onChange={this.handleChange}
                    />

                    <button className = 'formButton'>Envoyer</button>

                </form>

            </div>
        )
    }

}


export default ContactForm;