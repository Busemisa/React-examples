import React, { Component } from 'react';

export default class FontAwsome extends Component {
  render() {
    const { yas, adi } = this.props;
    return (
      <div>
        <ul>
          <li>YAŞ : {yas} <i className="fab fa-instagram"></i> </li>
          <li>ADI: {adi} <i className="fas fa-arrow-left"></i></li>
          <i className="fas fa-phone"></i>
          <i className="fas fa-envelope"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-whatsapp"></i>
        </ul>
      </div>
    );
  }
}
