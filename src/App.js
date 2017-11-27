import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Button, Icon, Footer} from 'react-materialize';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To Do List React</h1>
        </header>
        <h1>Hola Mundo</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button waves='light'>EDIT ME<Icon left>save</Icon></Button>
        <Footer copyrights="&copy 2015 Copyright Text"
          moreLinks={
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          }
          links={
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          }
          className='example Footer'
          >
          <h5 className="white-text">Footer Content</h5>
          <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </Footer>;
      </div>
    );
  }
}

export default App;
