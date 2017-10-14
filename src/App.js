import React, { Component } from 'react';
import logo from './logo.svg';
import fiji from './fiji.gif';
import germany from './deutschland.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <img src={fiji} className="Map-image"/>
          <img src={germany} className="Map-image"/>
        </p>
      </div>
    );
  }
}

export default App;
