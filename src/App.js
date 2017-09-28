import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'flexboxgrid/dist/flexboxgrid.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
            <div className="box">Responsive</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
