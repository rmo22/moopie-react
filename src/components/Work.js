import React from 'react';
import mooimage from '../assets/mrmoopie.jpg';
import workplace from '../assets/workplace.jpg';

function Work() {
	const handleClick = () => {
		window.open('http://www.ourcowmolly.co.uk/');
	};

	return (
		<div>
			<h3>
				Helping on the farm is also very important to Mr Moopie, click below to
				find out more...{' '}
			</h3>{' '}
			{/*This link of code above opens up a new window*/}
			<button onClick={handleClick}>
				Click to go to Mr and Mrs Moopie's workplace
			</button>
			<img
				src={mooimage}
				height={90}
				width={120}
				alt="cow"
				className="mooimage"
			/>
			<img
				src={workplace}
				height={90}
				width={90}
				alt="cow"
				className="workplace"
			/>
		</div>
	);
}

export default Work;
