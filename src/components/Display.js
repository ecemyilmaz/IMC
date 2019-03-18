import React, { Component } from "react";
import Button from "./Button";

class Circumference extends Component {
  constructor(props) {
    super(props);

    this.decideColor = this.decideColor.bind(this);
  }

  decideColor(number) {
    let color;
    if (number < 18.5) {
      color = "#9DD9D2";
    } else if (number >= 18.5 && number < 25) {
      color = "#fff";
    } else if (number >= 25 && number < 30) {
      color = "#F18F01";
    } else if (number >= 30) {
      color = "#C73E1D";
    }

    return color;
  }

  render() {
    let resultado = this.props.result();
    let color = this.decideColor(resultado);
    return (
      <svg viewBox="0 0 36 36" className="circumf">
        <path
          className="circumf_path"
          d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          strokeWidth="1"
          stroke={color}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="circumf_text"
        >
          {resultado}
        </text>
      </svg>
    );
  }
}

class Display extends Component {
  constructor(props) {
    super(props);

    this.calculate = this.calculate.bind(this);
    this.evalResult = this.evalResult.bind(this);
  }

  calculate() {
    let weight = parseInt(this.props.appState.weight);
    let height = Number(this.props.appState.height * 0.01);

    let formula = Math.round((weight / (height * height)) * 10) / 10;

    return formula;
  }

  evalResult(number) {
    let state;
    if (number < 18.5) {
      state = "Abaixo de Peso";
    } else if (number >= 18.5 && number < 25) {
      state = "Peso Normal";
    } else if (number >= 25 && number < 30) {
      state = "Acima de Peso";
    } else if (number >= 30) {
      state = "Obesidade";
    }
    return state;
  }
  render() {
    let estado = this.evalResult(this.calculate());
    return (
      <div className="Display">
        <div className="Display__text">
          <h1>{estado}</h1>
        </div>
        <Circumference result={this.calculate} />
        <Button />
      </div>
    );
  }
}
export default Display;
