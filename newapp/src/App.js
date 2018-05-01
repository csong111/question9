import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>What is your answer?</h1>
        <select>
          <option value='yes'>Yes</option>
          <option value='maybe'>Maybe</option>
          <option valuue='no'>No</option>
        </select>
      </div>
    );
  }
}

export default App;
