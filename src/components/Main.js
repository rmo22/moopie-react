import React from 'react';
import mooimage from '../assets/mrmoopie.jpg';
import logo from '../assets/logo.jpg';

function Main() {
	return (
		<div>
			<img src={logo} height={150} width={180} className="logo" alt="" />
			<img src={logo} height={150} width={180} className="logo" alt="" />
			<img src={logo} height={150} width={180} className="logo" alt="" />
			<img src={logo} height={150} width={180} className="logo" alt="" />
			<img src={logo} height={150} width={180} className="logo" alt="" />
			<img src={logo} height={150} width={180} className="logo" alt="" />
			<img src={logo} height={150} width={180} className="logo" alt="" />

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
