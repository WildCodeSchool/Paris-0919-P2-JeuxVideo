import React from 'react';
import './ContactForm.css'

class ContactForm extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <input
                        id='email'
                        type='text'
                    />
                    <input
                        id='reason'
                        type='text'
                    />
                    <input
                        id='message'
                        type='text'
                    />
                </form>

            </div>
        )
    }

}


export default ContactForm;