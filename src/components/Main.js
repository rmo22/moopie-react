import React from 'react';
import mooimage from '../assets/mrmoopie.jpg';
import logo from '../assets/logo.jpg';

function Main() {
	return (
		<div>
			<main className="maincontent">
				<h2>Mr Moopie welcomes you to his mooooniverse</h2>
			</main>
			<img
				src={mooimage}
				height={500}
				width={700}
				alt="cow"
				className="mooimage"
			/>
		</div>
	);
}
export default Main;
