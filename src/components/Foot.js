import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import {Footer, Button} from 'react-materialize';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/Filters';
import './Foot.css';

const FILTER_FOOTER = {
	[SHOW_ALL]: 'All',
	[SHOW_ACTIVE]: 'Active',
	[SHOW_COMPLETED]: 'Completed'
}

class Foot extends React.Component {
	static propTypes = {
		completedCount: PropTypes.number.isRequired,
		activeCount: PropTypes.number.isRequired,
		filter: PropTypes.string.isRequired,
		onClearCompleted: PropTypes.func.isRequired,
		onShow: PropTypes.func.isRequired
	}

	// active to do count
	renderTodoCount() {
		const { activeCount } = this.props
		const itemWord = activeCount === 1 ? 'item' : 'items'
		
		return (
			<span className="item-count">
				<strong>{activeCount || 'No'}</strong> {itemWord} left
			</span>
		)
	}

	// filters
	renderFilterLink(filter) {
		const nameFilter = FILTER_FOOTER[filter]
		const { filter: selectedFilter, onShow} = this.props
		return (
			<a 
				// filters
				className={classnames({ selected: filter === selectedFilter})}
				onClick={() => onShow(filter)}
			>
				{nameFilter}
			</a>
		)
	}
	
	// clear button
	renderClearButton() {
		const { completedCount, onClearCompleted } = this.props
		if (completedCount > 0) {
			return (
				<Button s={12} 
					waves='light'
					onClick= {onClearCompleted} >Clear completed 
				</Button>
			)
		}
	}

	render() {
		return ( 
			<Footer className="Footer" copyrights="developed by Paula Ponce"
				moreLinks={
					<a className="grey-text text-lighten-4 right footer-below" href="https://github.com/PaulaPonce" target="_blank">
						<i className="fa fa-github" aria-hidden="true"></i>
					</a>
				}
			>
				{this.renderTodoCount()}
				{/*Filters*/}
				<ul className="footer-above">
					{[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
						<li key={filter}>
							{this.renderFilterLink(filter)}
						</li>
					)}
				</ul>
				{this.renderClearButton()}
			</Footer> 
		)
	}
}

export default Foot;
