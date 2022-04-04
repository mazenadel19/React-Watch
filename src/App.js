import React, { Component } from 'react';
import './App.css';

const oneMin = 60_000
const colors = ["#46BCDE", "#52D273", "#E94F64", "#E57254", "#e5c453", '#40e0d0','#673ab7','#9c27b0']

export default class App extends Component {
	state = {
		time: new Date().toLocaleTimeString(),
	};

	componentDidMount() {
		setInterval(() => {
			this.setState({ time: new Date().toLocaleTimeString() });
		}, 1000);

		setInterval(()=>{
			document.querySelector(".timeStyle").style.color=colors[Math.round(Math.random()*7)];
		},oneMin*5)
	}


	render() {
		return (
			<div className='wrapper'>
				<span className='timeStyle'>{this.state.time}</span>
			</div>
		);
	}
}
