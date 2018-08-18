import React, { Component } from 'react';
import Image from './img/myreads.png'

class MyReads extends Component {
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
					<img src={Image} className='project-image' alt='My Reads Web App' onClick={this.scaleImage}/>
					<h1>My Reads</h1>
					<a className='brandico-github-text git-link' href='https://github.com/moisescualexandru/MyReadsProject' target='blank'> Link</a>
				</div>
				<div className='info-content'>
					<h3>Description: This is a simple app that let's you keep updated your book readings</h3>
					<p>- Project created with React JS Framework</p>
					<p>- Functionality was implemented by me by filtering through books, adding them to a category shelf and switching through shelves</p>
					<p>- Learned how to implement a back-end server into the framework, how to filter through objects based on user input and how to debug an application</p>
				</div>
				{this.state.scale && (
					<div className='scaled' onClick={this.scaleImage}>
						<img src={Image} alt='My Reads Web App' className='project-image-scaled'/>
					</div>
				)}
			</div>
		)
	}
}

export default MyReads;