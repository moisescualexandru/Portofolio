import React, { Component } from 'react';
import Image from './img/Classic Arcade Game.png'

class ClassicArcade extends Component {
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
					<img src={Image} className='project-image' alt="Classic Arcade Game Web App" onClick={this.scaleImage}/>
					<h1>Classic Arcade Game</h1>
				</div>
				<div className="info-content">
					<h3>Description: This application is a classic frogger arcade game</h3>
					<p>- Technologies used: Vanilla JavaScript, HTML 5 and CSS 3</p>
					<p>- Functionality was implemented by me by adding movement to the character, adding enemies on the playing grid and handling collisions</p>
					<p>- Learned about implementing a MVC system using JavaScript and how to handle screen movements and collisions between objects</p>
				</div>
				{this.state.scale && (
					<div className='scaled' onClick={this.scaleImage}>
						<img src={Image} alt="Classic Arcade Game Web App" className='project-image-scaled'/>
					</div>
				)}
			</div>
		)
	}
}

export default ClassicArcade;