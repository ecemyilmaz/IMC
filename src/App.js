import React, { Component } from 'react';
import './App.scss';
import Display from './components/Display';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <Display />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
