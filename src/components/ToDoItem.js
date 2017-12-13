import React, { Component } from 'react';
import '../components/ToDoItem.css';

class ToDoItem extends React.Component {
	// MONTADO
	// se instancia un componente, define el estado inicial
	constructor(props, context) {
		super(props, context);

		this.createTask = this.createTask.bind(this);
		this.delete = this.delete.bind(this);
	}
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

	delete(key) {
		this.props.delete(key);
	}

	createTask(item) {
		//listen the click event and associating it with an event handler delete
		return <li onClick={(e) => this.delete(item.key, e)} key={item.key}>{item.text}</li>

	}

	render() {
		{/*list of to do items passed as entries and turning them into jsx/html elements*/};
		let todoEntries = this.props.entries;
		let listItems = todoEntries.map(this.createTask);
		return (
			<ul>
				{listItems}
			</ul>
		);
	}
}

export default ToDoItem;
