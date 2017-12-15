import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import '../components/ToDoItem.css';
import ToDoTextInput from '../components/ToDoTextInput';
import {Button} from 'react-materialize';

class ToDoItem extends React.Component {
	// MONTADO
	// se instancia un componente, define el estado inicial
	/*
	constructor(props, context) {
		super(props, context);

		this.createTask = this.createTask.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
	}
	*/
	// el componente se está por renderizar, modificar su estado sin causar una actualización
	componentWillMount() {
		console.log('el componente se va a montar :B')
	}
	// el componente se renderizó en el navegador, permite interactuar con el DOM
	componentDidMount() {
		document.addEventListener('click', this.createTask);
	}

	// ACTUALIZACIÓN
	/*
	// se ejecuta inmediatamente después de que el componente reciba nuevas propiedades, actualizar estado --> nextProps != this.props
	componentWillReceiveProps(nextProps) {
		console.log('si cambia un prop');
		this.setState({
			completed: true;
		})
	}
	*/
	/*
	// se ejecuta antes de empezar a actualizar un componente, cuando llegan nuevas propiedades (nextProps) y nuevo estado (nextState)
	shouldComponentUpdate(nextProps, nextState) {
		console.log('validar si el componente se tiene que actualizar');
		// if( nextState.text !== this.props.entries) return true;
		// return false;
	}
	*/
	// si el anterior devuelve true, preparación antes que se actualize la UI
	componentWillUpdate() {
		console.log('el componente se va a actualizar');
	}
	// después de que se renderiza el componente en el DOM
	componentDidUpdate() {
		console.log('el componente se actualizó')
	}

	// DESMONTADO
	/*
	// limpieza antes de remover el componente
	componentWillUnmount() {
		document.removeEventListener('click', this.createTask);
	}
	*/

	static propTypes = {
		todo: PropTypes.object.isRequired,
		editTodo: PropTypes.func.isRequired,
		deleteTodo: PropTypes.func.isRequired,
		editTodo: PropTypes.func.isRequired
	}

	state = {
		editing: false
	}

	handleDoubleClick = () => {
		this.setState({ editing: true })
	}

	handleSave = (key, text) => {
		if (text.length === 0) {
			this.props.deleteTodo(key)
		} else {
			this.props.editTodo(key, text)
		}
		this.setState({ editing: false })
	}

	render() {
		const { todo, completeTodo, deleteTodo } = this.props
		let element

		if (this.state.editing) {
			element = (
				<ToDoTextInput 
					text= {todo.text}
					editing={this.state.editing}
					onSave={(text) => this.handleSave(todo.key, text)} 
				/>
			)
		} else {
			element = (
				<div>
					<input 
						className="toggle"
						type="checkbox"
						checked={todo.completed}
						onChange={() => completeTodo(todo.key)} 
					/>
					<label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
					<Button s={12} waves='light' onClick={()=> deleteTodo(todo.key)}>X</Button>
				</div>
			)
		}

		return (
			<li className={classnames({
				completed: todo.completed,
				editing: this.state.editing
				})}>
				{element}
			</li>
		);
	}
}

export default ToDoItem;

