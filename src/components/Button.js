import React, { Component } from 'react';

class Button extends Component {
  render(){
    return(
      <button className="learn-more">
    <div className="circle">
      <span className="icon arrow"></span>
    </div>
    <p className="button-text">Saber Mais</p>
  </button>
    )
  }
}
export default Button;
