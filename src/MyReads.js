import React, { Component } from 'react';
import Image from './img/myreads.png'

class MyReads extends Component {
	render() {
		return(
			<div className='main'>
				<div className="info-header">
					<img src={Image} className='project-image' alt="My Reads Web App"/>
					<h1>My Reads</h1>
				</div>
				<div className="info-content">
					<h3>Description: This is a simple app that let's you keep updated your book readings</h3>
					<p>- Project created with React JS Framework</p>
					<p>- Functionality was implemented by me by filtering through books, adding them to a category shelf and switching through shelves</p>
					<p>- Learned how to implement a back-end server into the framework, how to filter through objects based on user input and how to debug an application</p>
				</div>
			</div>
		)
	}
}

export default MyReads;