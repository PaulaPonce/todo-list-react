import React, { Component } from 'react';
import '../containers/App.css';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Foot from '../components/Foot';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header titulo='soy el titulo' />
				<MainSection/>
				<Foot contenido='Footer content' />
			</div>
		)
	}
}

export default App;
