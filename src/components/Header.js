import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoTextInput from './ToDoTextInput';
import './Header.css';

class Header extends React.Component {
	static propTypes = {
		addTodo: PropTypes.func.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string
	}

	//ToDoTextInput
	handleSave = text => {
		if(text.length !== 0) {
			this.props.addTodo(text)
		}
	}

	render() {
		return (
			<header className="App-header">
				<div className="Title-container">
					{/*Title*/}
					<h1 className="Header-title">
						{this.props.title}
					</h1>
					{/*Description*/}
					{this.props.description && <h2 className="Header-description">{this.props.description}</h2>}
				</div>
				{/*Input form*/}
				<ToDoTextInput 
					newTodo
					onSave={this.handleSave}
					placeholder="add a task!"
				/>
			</header>
		);
	}
}

export default Header;
