import React from 'react';
import Joke from '../components/Joke';

const Jokes = () => {
	return (
		<div>
			<h1>Jokes</h1>
			<Joke
				question="What did the mama cow say to the baby cow?"
				answer="It's pasture bedtime"
			/>
			<Joke question="How do you count cows?" answer="You use a cowculator" />
			<Joke
				question="What happens when you try talking to a cow?"
				answer="Everything just goes in one ear and out the udder"
			/>
			<Joke
				question="What kind of shows do cows like best?"
				answer="Moosicals"
			/>
			<Joke question="Where do cow farts come from?" answer="Their dairy-ere" />
			<Joke answer="I am not amoosed" />
		</div>
	);
};

export default Jokes;
