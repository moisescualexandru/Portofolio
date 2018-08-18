import React, { Component } from 'react';
import Image from './img/Pixel-art-maker.png'

class Pixel extends Component {
	state = {
		scale: false
	}

	scaleImage = () => {
		this.state.scale ? this.setState({ scale: false }) : this.setState({ scale: true });
	}


	render() {
		return(
			<div className='main'>
				<div className="info-header">
					<img src={Image} className='project-image' alt="Pixel Art Maker Web App" onClick={this.scaleImage}/>
					<h1>Pixel Art Maker</h1>
				</div>
				<div className="info-content">
					<h3>Description: An HTML, CSS and JavaScript project for drawing enthusiasts</h3>
					<p>- Technologies used: Vanilla JavaScript, HTML 5 and CSS 3</p>
					<p>- Functionality was implemented personally</p>
					<p>- You can pick the canvas size, select the color and do your best</p>
				</div>
				{this.state.scale && (
					<div className='scaled' onClick={this.scaleImage}>
						<img src={Image} alt="Pixel Art Maker Web App" className='project-image-scaled'/>
					</div>
				)}				
			</div>
		)
	}
}

export default Pixel;