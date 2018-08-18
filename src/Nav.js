import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
	render() {
		return(
			<div className="nav">
				<div className="button"><Link to='/'>Home</Link></div>
				<div className="button" onMouseOver={() => document.getElementById('projects').classList.add('show')} onMouseOut={() => document.getElementById('projects').classList.remove('show')}>
					Projects
					<div id='projects' className="projects" onMouseOut={() => document.getElementById('projects').classList.remove('show')}>
						<Link to='/neighborhood-map'><div className='project'>Neighborhood Map</div></Link>
						<Link to='/arcade-game'><div className='project'>Arcade Game</div></Link>
						<Link to='/memory-game'><div className='project'>Memory Game</div></Link>
						<Link to='/pixel-art-maker'><div className='project'>Pixel Art Maker</div></Link>
						<Link to='/myreads'><div className='project'>My Reads</div></Link>
					</div>
				</div>
				<Link to='/contact' className="button"><div>Contact</div></Link>
			</div>
		)
	}
}

export default Nav;