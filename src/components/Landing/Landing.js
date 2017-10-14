import React from "react";
import { connect } from "react-redux";
import './Landing.css'
import Nav from '../Nav/Nav.js'

export default function Landing() {
	return (
		<div className="landing-container">
			<div className='nav-landing'>
				<div className='hhhh'>
					<div className='left-nav'>
					·
					</div>
					<div className='right-nav'>
						<a href='http://localhost:1337/auth'>
							<button className='nav-button'>test</button>
						</a>
					</div>
				</div>
			</div>
			<div className='landing-p1'>
				<div className='herdo'>
					<div className='logo'>
						<span className='text'>Noti</span><span className='red'>·</span><span className='text'>Far</span>
					</div>
					<div className='line'></div>
					<span className='descr'>A device to send critical notifications to those who care, while afar.</span>
					<button className='learn'>Learn More</button>
				</div>
			</div>
		</div>
	);
}

        