import React, { Component } from 'react';
import '../components/ToDoItem.css';

class ToDoItem extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.createTask = this.createTask.bind(this);
		this.delete = this.delete.bind(this);
	}

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
