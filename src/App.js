import React, { Component } from "react";
import "./App.scss";
import Display from "./components/Display";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 140,
      weight: 40
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <Display appState={this.state} />
          <Form appState={this.state} stateChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default App;
