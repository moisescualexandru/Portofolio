import React, { Component } from 'react';
import Image from './img/Neighborhood Restaurant.png'

class NeighborhoodMap extends Component {
	state = {
		scale: false
	}

	scaleImage = () => {
		this.state.scale ? this.setState({ scale: false }) : this.setState({ scale: true });
	}

	render() {
		return(
			<div className='main'>
				<div className='info-header'>
					<img src={Image} id='project-image' className='project-image' alt='Neighborhood Map Web App' onClick={this.scaleImage}/>
					<h1>Neighborhood Map</h1>
					<a className='brandico-github-text git-link' href='https://github.com/moisescualexandru/Neighborhood-Map' target='blank'> Link</a>
				</div>
				<div className='info-content'>
					<h3>Description: A map with my neighborhood's attractions</h3>
					<p>- A web application using Google Maps that pin-points 12 good restaurants in Bucharest along with details for ratings, price categories and cuisine</p>
					<p>- Technologies used: React JS framework, HTML 5 and CSS 3 along with Google Maps and Foursquare APIs</p>
					<p>- Design and functionality were implemented personally</p>
					<p>- Learned about implementing APIs with React JS framework and how to customize the functionality</p>
				</div>
				{this.state.scale && (
					<div className='scaled' onClick={this.scaleImage}>
						<img src={Image} alt='Neighborhood Map Web App' className='project-image-scaled'/>
					</div>
				)}
			</div>
		)
	}
}

export default NeighborhoodMap;