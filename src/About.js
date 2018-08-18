import React, { Component } from 'react';
import Profile from './img/ProfilePic.jpg';

class About extends Component {
	render() {
		return(
			<div className='main'>
				<img src={Profile} alt='Profile pic' className='profile-image'/>
				<h2 className='hi'>Hi, I'm Alex,</h2>
				<p className='about-me'>
					I'm a Junior Full Stack Software Engineer who loves programming and building web applications, a recent graduate of the Web Developer Scholarship by Udacity and Google. During my 6 years in BRD-GSG bank, I created several internal tools and applications that automatized time-consuming processes which kindled my passion for programming and web development. I'd love to combine this passion with my skills to continue building new and innovative web applications.
				</p>
				<ul className='social-media'>
					<a href='https://github.com/moisescualexandru' target='blank'><li className='brandico-github-text'></li></a>
					<a href='https://www.linkedin.com/in/alexandru-moisescu-048397136/' target='blank'><li className='brandico-linkedin-rect'></li></a>
					<li>E-mail: moisescu.alexandru88@gmail.com</li>
				</ul>
			</div>
		)
	}
}

export default About;