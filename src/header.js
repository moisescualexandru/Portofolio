import React, { Component } from 'react';
import Clock from './clock.js';
import Logo from './img/Logo2.png';

class Header extends Component {
	render() {
		return(
			<div className="header">
				<div className="info">
					<img src={Logo} alt=""/>
				</div>
				<Clock />
			</div>
		)
	}
}

export default Header;