import React, { Component } from 'react';

import './Options.css';

class Options extends Component {
  render() {
    return (
      <div id='option'>
        <section>
          <i className="fas fa-chevron-left"></i>
          <div id='language'><p>English</p></div>
          <div id='sound'><p>Sound On</p></div>
        </section>
      </div>
    );
  }
}

export default Options;