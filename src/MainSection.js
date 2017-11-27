import React, { Component } from 'react';
import './MainSection.css';
import {Button, Icon} from 'react-materialize';

class MainSection extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hola Mundo</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button waves='light'>EDIT ME<Icon left>save</Icon></Button>   
      </div>
    );
  }
}

export default MainSection;
