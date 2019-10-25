var React = require('react');
var Layout = require('../defaultlayout');

class NewExpenses extends React.Component {
	render() {
		return (
			<Layout>
				<div className='text-center col-12 d-flex flex-wrap justify-content-center'>
					<div className='card-5 col-6'>
						<div className='card-body'>
							<h1 className='card-title'>New expense</h1>
							<p>
								<form className='m-3 justify-content-end' method='POST' action='/expenses'>
									Amount: <input type='text' name='username' required />
									<br />
									<br />
									Category:{' '}
									<select name='category'>
										<option value='Beauty'>Beauty & Wellness</option>
										<option value='Dining'>Dining</option>
										<option value='Entertainment'>Entertainment</option>
										<option value='Family'>Family</option>
										<option value='Fashion'>Fashion</option>
										<option value='Transport'>Transport</option>
										<option value='Travel'>Travel</option>
									</select>
									<br />
									<br />
									Payment Method: {' '}
									<select name='payment_method'>
										<option value='card'>Card</option>
										<option value='cash'>Cash</option>
									</select>
									<br />
									<br />
									{/* TODO: add cards available to user by user ID, using AJAX and app.get the url */}
									Card: {' '}
									<select name='card_id'>
										<option value='null'></option>
										<option value='card'>Card</option>
									</select>
									<br />
									<br />
									<input type='submit' value='Submit' classNameName='m-2' />
								</form>
							</p>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

module.exports = NewExpenses;
