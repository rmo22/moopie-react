import React from 'react';
import mrmooimage from '../assets/mrmoopie.jpg';
// import logo from '../assets/logo.jpg';

const Home = () => {
	return (
		<div>
			<h2>Mr Moopie welcomes you to his mooooniverse</h2>

			<img
				src={mrmooimage}
				height={500}
				width={700}
				alt="cow"
				className="mrmooimage"
			/>
		</div>
	);
};

export default Home;
