import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Row, Input, Icon, Button} from 'react-materialize';
import ToDoItem from '../components/ToDoItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions';
import '../components/ToDoTextInput.css';

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

	handleSubmit = e => {
		const text = e.target.value.trim()
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
				{/*listen the submit event on the form, and call addItem method*/}
				<form>
					{/*acces DOM elements via refs, storing a reference on input element*/}
					<label><i class="material-icons">assignment</i></label>
					<input s={12} 
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
					<Button s={12} waves='light' type="submit">ADD<Icon left>add</Icon></Button>
				</form>	
			</Row>	
		)
	}
}

export default ToDoTextInput;
