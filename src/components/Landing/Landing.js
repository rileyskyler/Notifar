import React from "react";
import { connect } from "react-redux";
import './Landing.css'
import Nav from '../Nav/Nav.js'

export default function Landing() {
	return (
		<div className="Landing">
			<Nav />
			<div className='main-content'>
				<div></div>
				<span className='text'>Noti·far</span>
			</div>
		</div>
	);
}