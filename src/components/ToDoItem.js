import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import ToDoTextInput from './ToDoTextInput';
import { Button, CollectionItem } from 'react-materialize';
import './ToDoItem.css';

class ToDoItem extends React.Component {
	static propTypes = {
		todo: PropTypes.object.isRequired,
		editTodo: PropTypes.func.isRequired,
		deleteTodo: PropTypes.func.isRequired,
		completeTodo: PropTypes.func.isRequired
	}

	state = {
		editing: false
	}

	// edit event
	handleDoubleClick = () => {
		this.setState({ editing: true })
	}

	// save edited todo event
	handleSave = (id, text) => {
		if (text.length === 0) {
			this.props.deleteTodo(id)
		} else {
			this.props.editTodo(id, text)
		}
		this.setState({ editing: false })
	}

/*
handleChange = (id) => {
	console.log('check')
	this.props.completeTodo(id)
}
*/

	render() {
		const { todo, completeTodo, deleteTodo } = this.props
		let element

		// edit todo item
		if (this.state.editing) {
			element = (
				<ToDoTextInput 
					text= {todo.text}
					editing={this.state.editing}
					onSave={(text) => this.handleSave(todo.id, text)} />
			)
		} else {
			element = (
				<div className="todo-container">
					<input 
						className="toggle"
						type="checkbox"
						checked={todo.completed}
						onChange={() => completeTodo(todo.id)} 
					/>
					<label 
						className="todo-item"
						onDoubleClick={this.handleDoubleClick}>
						{todo.text}
					</label>
					<Button s={12} className="delete-btn" waves='light' onClick={() => deleteTodo(todo.id)}>
						<i className="material-icons">delete</i>
					</Button>
				</div>
			)
		}

		//Todo Items
		return (
			<CollectionItem className={classnames({
				completed: todo.completed,
				editing: this.state.editing
				})}>
				{element}
			</CollectionItem>
		)
	}
}

export default ToDoItem;
