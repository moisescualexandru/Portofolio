import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
	render() {
		return(
			<div className='nav'>
				<Link to='/' className='button'><div><strong>Home</strong></div></Link>
				<div className='button' onMouseOver={() => document.getElementById('projects').classList.add('show')} onMouseOut={() => document.getElementById('projects').classList.remove('show')}>
					<strong>Projects</strong>
					<div id='projects' className='projects' onMouseOut={() => document.getElementById('projects').classList.remove('show')}>
						<Link to='/neighborhood-map'><div className='project'><strong>Neighborhood Map</strong></div></Link>
						<Link to='/arcade-game'><div className='project'><strong>Arcade Game</strong></div></Link>
						<Link to='/memory-game'><div className='project'><strong>Memory Game</strong></div></Link>
						<Link to='/pixel-art-maker'><div className='project'><strong>Pixel Art Maker</strong></div></Link>
						<Link to='/myreads'><div className='project'><strong>My Reads</strong></div></Link>
					</div>
				</div>
				<Link to='/about' className='button'><div><strong>About</strong></div></Link>
			</div>
		)
	}
}

export default Nav;