import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Form from './pages/Form';
import Jokes from './pages/Jokes';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/form" component={Form} />
					<Route path="/jokes" component={Jokes} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
