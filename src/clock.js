import React, { Component } from 'react';

class Clock extends Component {

	state = {
		time: new Date()
	}

	componentDidMount() {
		this.timer = setInterval(this.setDate(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	setDate = () => {
		const secondHand = document.querySelector('.second-hand');
		const minHand = document.querySelector('.min-hand');
		const hourHand = document.querySelector('.hour-hand');

		this.setState({ time: new Date() });
	    const seconds = this.state.time.getSeconds();
	    const secondsDegrees = ((seconds/60) * 360) + 90;
	    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	    const mins = this.state.time.getMinutes();
	    const minutesDegrees = ((mins/60) * 360) + 90;
	    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

	    const hour = this.state.time.getHours();
	    const hoursDegrees = ((hour/12) * 360) + 90;
	    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	}

	render() {
		{setInterval((this.setDate), 1000)}
		return(
			<div className="clock">
		    	<div className="clock-face">
		        	<div className="hand hour-hand"></div>
		        	<div className="hand min-hand"></div>
		        	<div className="hand second-hand"></div>
		      	</div>
		    </div>
		)
	}
}

export default Clock;