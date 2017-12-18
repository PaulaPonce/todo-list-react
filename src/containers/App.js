import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions'; // <------
import '../containers/App.css';

const App = ({todos, actions}) => (
	<div className="App">
		<Header title='To Do List React' addTodo={actions.addTodo} />
		<MainSection todos={todos} actions={actions}/>	
	</div>
)

App.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	todos: state.todos
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
