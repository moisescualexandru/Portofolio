import React, { Component } from 'react';
import Clock from './Clock.js';
import logo from './img/Logo2.png';

class Header extends Component {
	render() {
		return(
			<div className="header">
				<div className="info">
					<img src={logo} alt="site logo"/>
					<h2 className="name">Alexandru Moisescu<br/> <span className='function'>Junior Full Stack Developer</span></h2>
				</div>
				<Clock />
			</div>
		)
	}
}

export default Header;