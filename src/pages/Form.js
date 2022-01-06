import React from 'react';

const Form = () => (
	<div className="wrapper">
		<h1>Quiz... Find out what type of pie you are</h1>
		<h3>Question 1: Do you like sausage rolls?</h3>
		<form>
			<fieldset>
				<label>
					<p>Answer</p>
					<input name="answer" />
				</label>
			</fieldset>
			<button type="submit">Submit</button>
		</form>
	</div>
);

export default Form;
