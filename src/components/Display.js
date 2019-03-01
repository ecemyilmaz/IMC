import React, { Component } from 'react';
import Button from './Button';

class Circumference extends Component{
  render(){

    return(
      <svg viewBox="0 0 36 36" className="circumf">
  <path
    d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
    fill="none"
    stroke="white"
    strokeWidth="1"
    strokeDasharray="75, 100"
  />
  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="circumf_text">100%</text>
</svg>
    )
  }
}

class Display extends Component {
  render(){

    return(
      <div className="Display">
        <h1>Normal Weight</h1>
        <p>You can weight between x and xkg</p>
        <Circumference />
        <Button />
      </div>
    )
  }
}
export default Display;
