import React, { Component } from 'react';
import Image from './img/Pixel-art-maker.png'

class Pixel extends Component {
	render() {
		return(
			<div className='main'>
				<div className="info-header">
					<img src={Image} className='project-image' alt="Pixel Art Maker Web App"/>
					<h1>Pixel Art Maker</h1>
				</div>
				<div className="info-content">
					<h3>Description: An HTML, CSS and JavaScript project for drawing enthusiasts</h3>
					<p>- Technologies used: Vanilla JavaScript, HTML 5 and CSS 3</p>
					<p>- Functionality was implemented personally</p>
					<p>- You can pick the canvas size, select the color and do your best</p>
				</div>
			</div>
		)
	}
}

export default Pixel;