var React = require('react');
var Layout = require('../defaultlayout');

class NewExpenses extends React.Component {
	render() {
		return (
			<Layout>
				<div className='col-12 d-flex flex-wrap justify-content-center'>
					<div className='col-6'>
						<div className='card-body'>
							<h1 className='card-title text-center'>New expense</h1>
							<p>
								<form className='m-3' method='POST' action='/expenses'>
									<div className='form-group'>
										<label>Amount</label>
										<input
											type='integer'
											className='form-control'
											name='amount'
											required
										/>
									</div>

									<div className='form-group'>
										<label>Category</label>
										<select className='form-control' name='category'>
											<option>Select a Category...</option>
											<option value='Beauty'>Beauty & Wellness</option>
											<option value='Dining'>Dining</option>
											<option value='Entertainment'>Entertainment</option>
											<option value='Family'>Family</option>
											<option value='Fashion'>Fashion</option>
											<option value='Transport'>Transport</option>
											<option value='Travel'>Travel</option>
											
										</select>
									</div>
									<div className='form-group'>
										<label>Payment Method</label>
										<select className='form-control' name='payment_method' id='paymentMethod'>
											<option>Select an option...</option>
											<option value='card'>Card</option>
											<option value='cash'>Cash</option>
										</select>
									</div>
									<div className='form-group'>
										<label>Card</label>
										<select className='form-control' id='showAllCards' name='card_id'>
											<option>Select an option...</option>
										</select>
									</div>
									<div className='form-group'>
										<label>Date</label>
										<input
											type='date'
											className='form-control'
											name='date'
											id='datePicker'
											required
										/>
									</div>
									<input type='submit' value='Submit' className='m-2' />
								</form>
							</p>
						</div>
					</div>
				</div>
				<script src='/scriptofcards.js' />
			</Layout>
		);
	}
}

module.exports = NewExpenses;
