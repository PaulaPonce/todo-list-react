import React, { Component } from 'react';
import '../components/Header.css';
import ToDoTextInput from '../components/ToDoTextInput'

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">To Do List React</h1>
        <ToDoTextInput/>
      </header>
    );
  }
}

export default Header;
