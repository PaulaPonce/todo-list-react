import React, { Component } from 'react';
import '../components/MainSection.css';
import ToDoTextInput from '../components/ToDoTextInput'

class MainSection extends React.Component {	
	render() {
		return (
			<div className="App">
				<ToDoTextInput/>
			</div>
		);
	}
}

export default MainSection;
