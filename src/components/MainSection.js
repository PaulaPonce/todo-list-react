import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';
import Foot from './Foot';
import {Collection} from 'react-materialize';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/Filters';
import './MainSection.css';

const FILTERS = {
	[SHOW_ALL]: () => true,
	[SHOW_ACTIVE]: todo => !todo.completed,
	[SHOW_COMPLETED]: todo => todo.completed
}

class MainSection extends React.Component {	
	static propTypes = {
		todos: PropTypes.array.isRequired,
		actions: PropTypes.object.isRequired
	}

	// filter render in Footer
	state = { filter: SHOW_ALL}

	handleClearCompleted = () => {
		this.props.actions.clearCompleted()
	}

	handleShow = filter => {
		this.setState({ filter })
	}

	renderToggleAll(completedCount) {
		const { todos, actions } = this.props
		if (todos.length > 0) {
			return (
				<span>
					<input 
						className="toggle-all"
						type="checkbox"
						checked={completedCount === todos.length}
					/>
					<label onClick={actions.completeAll}/>
				</span>
			)
		}
	}

	renderFooter(completedCount) {
		const { todos} = this.props
		const { filter } = this.state
		const activeCount = todos.length - completedCount

		if(todos.length) {
			return (
				<Foot
					completedCount={completedCount}
					activeCount={activeCount}
					filter={filter}
					onClearCompleted={this.handleClearCompleted}
					onShow={this.handleShow}
				/>
			)
		}
	}

	render() {
		const { todos, actions } = this.props
		const { filter } = this.state
		const filteredTodos = todos.filter(FILTERS[filter])
		const completedCount = todos.reduce((count, todo) => 
			todo.completed ? count + 1 : count,
			0
		)
		return (
			<div>
				<section>
					{this.renderToggleAll(completedCount)}
					<Collection className="todo-list">
						{filteredTodos.map(todo => 
							<ToDoItem key={todo.id} todo={todo} {...actions} />
						)}
					</Collection>
				</section>
				{/*footer*/}
				{this.renderFooter(completedCount)}
			</div>
		)
	}
}

export default MainSection;
