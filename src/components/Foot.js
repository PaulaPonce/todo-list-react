import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import {Footer} from 'react-materialize';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/Filters';
import '../components/Foot.css';

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

	renderTodoCount() {
		const { activeCount } = this.props
		const itemWord = activeCount === 1 ? 'item' : 'items'
		return (
			<span>
				<strong>{activeCount || 'No'}</strong>{itemWord}
			</span>
		)
	}

	renderFilterLink(filter) {
		const title = FILTER_FOOTER[filter]
		const { filter: selectedFilter, onShow} = this.props
		return (
			<a 
				className={classnames({ selected: filter === selectedFilter})}
				style = {{ cursor: 'pointer'}}
				onClick={() => onShow(filter)}
			>
				{title}
			</a>
		)
	}

	renderClearButton() {
		const { completedCount, onClearCompleted } = this.props
		if (completedCount > 0) {
			return (
				<button
					onClick= {onClearCompleted} >Clear completed 
				</button>
			)
		}
	}

	render() {
		return ( 
			<Footer className="Footer" copyrights="&copy 2017 Copyright Text"
				moreLinks={
					<a className="grey-text text-lighten-4 right" href="https://github.com/PaulaPonce" target="_blank">
						<i class="fa fa-github" aria-hidden="true"></i>
					</a>
				}
			>
				{this.renderTodoCount()}
				<ul>
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
