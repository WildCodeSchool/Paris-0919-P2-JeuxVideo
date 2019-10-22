import React from 'react';
import './ContactForm.css'

class ContactForm extends React.Component {

    state = {
        email : 'mail',
        inquiry : 'inquiry'
        message : 'Text...'

    }

    render() {
        return (
            <div>
                <form className='contactForm'>
                    <input
                        id='email'
                        type='text'
                        value= {this.state.email}
                    />
                    <input
                        id='reason'
                        type='text'
                        value={this.state.value}

                    />
                    <input
                        id='message'
                        type='text'
                        value={this.state.message}
                    />
                </form>

            </div>
        )
    }

}


export default ContactForm;