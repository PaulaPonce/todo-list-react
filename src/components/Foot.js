import React, { Component } from 'react';
import '../components/Foot.css';
import {Footer} from 'react-materialize';

class Foot extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			content: 'Footer Content'
		}
	}

	render() {
		const { content} = this.state
		
		return ( 
			<Footer className="Footer" copyrights="&copy 2015 Copyright Text"
				moreLinks={
					<a className="grey-text text-lighten-4 right" href="https://github.com/PaulaPonce" target="_blank">
						<i class="fa fa-github" aria-hidden="true"></i>
					</a>
				}
				/*
				links={
					<ul>
						<li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
						<li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
						<li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
						<li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
					</ul>
				}
				className='example Footer'
				*/
			>
				<h5 className="white-text">{content}</h5>
			</Footer> 
		);
	}
}

export default Foot;
