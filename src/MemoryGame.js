import React, { Component } from 'react';
import Image from './img/Memory Game.png'

class MemoryGame extends Component {
	render() {
		return(
			<div className='main'>
				<div className="info-header">
					<img src={Image} className='project-image' alt="Memory Game Web App"/>
					<h1>Memory Game</h1>
				</div>
				<div className="info-content">
					<h3>Description: This is a simple web aplication for a card memory game</h3>
					<p>- Built a complete browser-based card matching game (also known as Concentration). But this isn’t just any memory game! It’s a shnazzy, well-designed, feature-packed memory game!</p>
					<p>- Technologies used: HTML5, CSS3, Vanilla JavaScript</p>
					<p>- Design and functionality implemented personally</p>
				</div>
			</div>
		)
	}
}

export default MemoryGame;