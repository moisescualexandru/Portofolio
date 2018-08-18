import React, { Component } from 'react';
import Image from './img/Neighborhood Restaurant.png'

class NeighborhoodMap extends Component {
	render() {
		return(
			<div className='main'>
				<div className="info-header">
					<img src={Image} className='project-image' alt="Neighborhood Map Web App"/>
					<h1>Neighborhood Map</h1>
				</div>
				<div className="info-content">
					<h3>Description: A map with my neighborhood's attractions</h3>
					<p>- A web application using Google Maps that pin-points 12 good restaurants in Bucharest along with details for ratings, price categories and cuisine</p>
					<p>- Technologies used: React JS framework, HTML 5 and CSS 3 along with Google Maps and Foursquare APIs</p>
					<p>- Design and functionality were implemented personally</p>
					<p>- Learned about implementing APIs with React JS framework and how to customize the functionality</p>
				</div>

			</div>
		)
	}
}

export default NeighborhoodMap;