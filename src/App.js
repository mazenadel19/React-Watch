import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
	state = {
		time: new Date().toLocaleTimeString(),
	};

	componentDidMount() {
		setInterval(() => {
			this.setState({ time: new Date().toLocaleTimeString() });
		}, 1000);
	}


	render() {
		return (
			<div className='wrapper'>
				<span className='timeStyle'>{this.state.time}</span>
			</div>
		);
	}
}
