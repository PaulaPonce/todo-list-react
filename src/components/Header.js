import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoTextInput from '../components/ToDoTextInput';
import '../components/Header.css';

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
				<h1 className="App-title">
					{this.props.title}
				</h1>
				{this.props.description && <p>{this.props.description}</p>}
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
