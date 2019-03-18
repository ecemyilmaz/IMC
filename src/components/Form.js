import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <div className="switch-field">
          <input
            type="radio"
            id="switch_left"
            name="switch_2"
            value="yes"
            defaultChecked
          />
          <label htmlFor="switch_left">Homem</label>
          <input type="radio" id="switch_right" name="switch_2" value="no" />
          <label htmlFor="switch_right">Mulher</label>
        </div>
        <div className="range-group">
          <div className="range-field">
            <div className="range-field__text">
              <label htmlFor="range">Estatura</label>
              <span className="range-current">
                <span className="destaque">{this.props.appState.height}</span>
                cm
              </span>
            </div>
            <input
              onChange={e => {
                this.props.stateChange(e);
              }}
              name="height"
              type="range"
              min="140"
              max="200"
              step="1"
            />
            <div className="range-field__text">
              <span className="extreme">140</span>
              <span className="extreme">200</span>
            </div>
          </div>

          <div className="range-field">
            <div className="range-field__text">
              <label htmlFor="range">Peso</label>
              <span className="range-current">
                <span className="destaque">{this.props.appState.weight}</span>kg
              </span>
            </div>
            <input
              onChange={e => {
                this.props.stateChange(e);
              }}
              name="weight"
              type="range"
              min="30"
              max="125"
              step="1"
            />
            <div className="range-field__text">
              <span className="extreme">30</span>
              <span className="extreme">125</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
