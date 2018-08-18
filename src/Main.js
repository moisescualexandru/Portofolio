import React, { Component } from 'react';
import Bknd from './img/digital-marketing.jpg';

class Main extends Component {
	render() {
		return(
			<div className='main'>
				<img src={Bknd} className='center-image' alt="Digital Marketing"/>
			</div>
		)
	}
}

export default Main;