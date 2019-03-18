import React, { Component } from "react";

class Button extends Component {
  clickButton() {
    let url = "https://rotasaude.lusiadas.pt/imc-o-que-calcular/";
    let win = window.open(url, "_blank");
    win.focus();
  }

  render() {
    return (
      <button className="learn-more" onClick={this.clickButton}>
        <div className="circle">
          <span className="icon arrow" />
        </div>
        <p className="button-text">Saber Mais</p>
      </button>
    );
  }
}
export default Button;
