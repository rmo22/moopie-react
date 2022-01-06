import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavLink, Bars, NavMenu, NavLogo } from './NavbarElements';
import logo from '../../assets/logo.jpg';
const Navbar = () => {
	return (
		<>
			<Nav>
				<NavLogo to="/">
					<img src={logo} style={{ justifyContent: 'center', width: '5rem' }} />
				</NavLogo>
				<Bars />

				<NavMenu>
					<NavLink to="/" activeStyle>
						Home
					</NavLink>
					<NavLink to="/about" activeStyle>
						About
					</NavLink>
					<NavLink to="/form" activeStyle>
						Quiz
					</NavLink>
					<NavLink to="/jokes" activeStyle>
						Joke Section
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
