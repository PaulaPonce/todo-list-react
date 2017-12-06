import React, { Component } from 'react';
import '../containers/App.css';
import Header from '../components/Header';
import Foot from '../components/Foot';
import MainSection from '../components/MainSection';


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
