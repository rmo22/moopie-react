import React from 'react';

function Form() {
	return (
		<div className="wrapper">
			<h1>How often do you eat pies?</h1>
			<form>
				<fieldset>
					<label>
						<p>Answer</p>
						<input name="name" />
					</label>
				</fieldset>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Form;
