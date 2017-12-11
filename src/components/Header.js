import React, { Component } from 'react';
import '../components/Header.css';

class Header extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
		titulo: 'To Do List React', 
		descripcion: 'soy la descripcion'
		};
	}

	render() {
		const { titulo, descripcion } = this.state

		return (
			<header className="App-header">
			<h1 className="App-title">{titulo}</h1>
			{descripcion && <p>{descripcion}</p>}
			</header>
		);
	}
}

export default Header;
