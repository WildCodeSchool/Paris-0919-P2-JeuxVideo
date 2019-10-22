import React from 'react';
import './ContactForm.css'

class ContactForm extends React.Component {

    state = {
        email : 'Mail',
        inquiry : 'Motif',
        message : 'Texte...'

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
            <div>
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
                </form>

            </div>
        )
    }

}


export default ContactForm;