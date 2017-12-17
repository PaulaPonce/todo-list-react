import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Row, Icon, Button} from 'react-materialize';
import './ToDoTextInput.css';

class ToDoTextInput extends React.Component {
	static propTypes = {
		onSave: PropTypes.func.isRequired,
		text: PropTypes.string,
		placeholder: PropTypes.string,
		editing: PropTypes.bool,
		newTodo: PropTypes.bool
	}

	state = {
		text: this.props.text || ''
	}

	// add new to do
	handleSubmit = e => {
		const text = e.target.value //e.target.value.trim()
		if (e.wich === 13) {
			this.props.onSave(text)
			if (this.props.newTodo) {
				this.setState({ text: ''})
			}
		}
	}

	handleChange = e => {
		 this.setState({ text: e.target.value })
	}

	handleBlur = e => {
		if( !this.props.newtodo) {
			this.props.onSave(e.target.value)
		}
	}

	render() {
		return (
			<Row>
				<form className="Header-form">
					{/*Icon*/}
					<label><i className="material-icons">assignment</i></label>
					{/*Input*/}
					<input s={10} 
						className = {classnames({
							edit: this.props.editing,
							'new-todo': this.props.newTodo
						})}
						type="text"
						placeholder={this.props.placeholder}
						autoFocus="true"
						value={this.state.text}
						onBlur={this.handleBlur}
						onChange={this.handleChange}
						onKeyDown={this.handleSubmit}
					/>	
				</form>
				{/*Add button*/}
				<Button s={12} 
					waves='light' 
					onClick={this.handleSubmit}
				>
					ADD
					<Icon left>add</Icon>
				</Button>
			</Row>	
		)
	}
}

export default ToDoTextInput;
