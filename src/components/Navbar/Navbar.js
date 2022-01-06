import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<BrowserRouter>
			<div>
				<li>
					<Link to="/Home">Home</Link>
				</li>
				<li>
					<Link to="/About">About</Link>
				</li>
				<li>
					<Link to="/Form">Form</Link>
				</li>
				<li>
					<Link to="/Jokes">Jokes</Link>
				</li>
			</div>
		</BrowserRouter>
	);
};

export default Navbar;
