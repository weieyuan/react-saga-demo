import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SagaTest from './components/SagaTest'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <SagaTest></SagaTest>
      </div>
    );
  }
}

export default App;
