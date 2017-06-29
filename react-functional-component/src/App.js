import React, { Component } from 'react';
import Reverser from './Reverser';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Reverser message="Hello, React!" />
      </div>
    );
  }
}

export default App;
