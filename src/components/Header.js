import React, { Component } from 'react';
import '../components/Header.css';
import PropTypes from 'prop-types';

class Header extends React.Component {
	/*
	constructor(props) {
		super(props);

		this.state = {
		titulo: 'To Do List React', 
		descripcion: 'soy la descripcion'
		};
	}	
	*/
	

	render() {
		//const { titulo, descripcion } = this.state

		return (
			<header className="App-header">
			<h1 className="App-title">{this.props.titulo}</h1>
			{this.props.descripcion && <p>{this.props.descripcion}</p>}
			</header>
		);
	}
}

Header.PropTypes = {
	titulo: PropTypes.string.isRequired,
	descripcion: PropTypes.string
}

export default Header;
