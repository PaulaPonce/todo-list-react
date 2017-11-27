import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Foot from './Foot';
import MainSection from './MainSection';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainSection/>
        <Foot/>
      </div>
    );
  }
}

export default App;
