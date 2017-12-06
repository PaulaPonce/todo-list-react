import React, { Component } from 'react';
import '../components/ToDoTextInput.css';
import {Row, Input, Icon, Button} from 'react-materialize'; 

class ToDoTextInput extends React.Component {
	render() {
		return (
			<Row>
				<Input s={12} className="Header-input" label="Add a task!" validate type='text'><Icon>assignment</Icon></Input>
				<Button s={12} waves='light'>ADD<Icon left>add</Icon></Button> 
			</Row>	
		)
	}
}

export default ToDoTextInput;
