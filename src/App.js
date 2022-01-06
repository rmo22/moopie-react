import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Form from './components/Form';
import About from './pages/About';
import Work from './components/Work';
import Navbar from './components/Navbar/Navbar';
// import Mrsmoolink from "./components/Mrsmoolink"

function App() {
	return (
		<div className="font-link">
			<Header />
			<Navbar />
			<Main />
			<h1>Hehe</h1>

			<Form />
			<About />
			<Work />
			<br />
			<Footer />
			{/* <Mrsmoolink /> */}
		</div>
	);
}

export default App;
