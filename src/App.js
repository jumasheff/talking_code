import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Recording from './Recording';
import logo from './logo.svg';
import './App.css';

const StyledRecording = () => (
  <MuiThemeProvider>
    <Recording />
  </MuiThemeProvider>
);

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
        <StyledRecording />
      </div>
    );
  }
}

export default App;
