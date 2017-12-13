import React, { Component } from 'react';
import '../components/ToDoTextInput.css';
import {Row, Input, Icon, Button} from 'react-materialize';
import ToDoItem from '../components/ToDoItem'

class ToDoTextInput extends React.Component {
	
	constructor(props, context) {
		super(props, context);

		//state object
		this.state = {
			//items array to storing all the items
			items: []
		};

		//addItem event
		this.addItem = this.addItem.bind(this);
		//deleteItem event
		this.deleteItem = this.deleteItem.bind(this);
	}

	addItem(e) {
		//variable to store the current value of items state object
		let itemArray = this.state.items;

		//validate if input has content --> add the text to itemArray
		if(this._inputElement.value !== "") {
			itemArray.unshift(
				{
					text: this._inputElement.value,
					key: Date.now(),
					completed: false
				}
			);

			this.setState({
				items: itemArray
			});

			this._inputElement.value = "";
		}
		console.log(itemArray);
		e.preventDefault();
	}

	deleteItem(key) {
		//contains everything except the item to removing
		let filteredItems = this.state.items.filter(function (item) {
			return (item.key !== key);
		});
		this.setState({
			items: filteredItems
		});
	}

/*
<Row>
<Input s={12} className="Header-input" label="Add a task!" validate type='text' ref={(a) => this._inputElement = a}><Icon>assignment</Icon></Input>
<Button s={12} waves='light' type="submit">ADD<Icon left>add</Icon></Button>
</Row>

<input  label="Add a task!" validate type='text' ref={(a) => this._inputElement = a}></input>
<button waves='light' type="submit">ADD</button>
*/
handleClick(event) {
	console.log(event);
}

	render() {
		return (
			<div>
				{/*listen the submit event on the form, and call addItem method*/}
				<form onSubmit={this.addItem}>
					{/*acces DOM elements via refs, storing a reference on input element*/}
					<label><i class="material-icons">assignment</i></label>
					<input s={12} className="Header-input" placeholder="Add a task!" validate type='text' ref={(a) => this._inputElement = a}></input>
				</form>
				<Button s={12} waves='light' type="submit" onClick={this.handleClick}>ADD<Icon left>add</Icon></Button>
				<ToDoItem
					entries={this.state.items}
					delete={this.deleteItem}
				/>
			</div>	
		)
	}
}

export default ToDoTextInput;
