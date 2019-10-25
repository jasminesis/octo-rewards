var React = require('react');
var Layout = require('../defaultlayout');

class NewExpenses extends React.Component {
	render() {
		return (
			<Layout>
				<div className='col-12 d-flex flex-wrap justify-content-center'>
					<div className='card-5 col-6'>
						<div className='card-body'>
							<h1 className='card-title text-center'>New expense</h1>
							<p>
								<form className='m-3' method='POST' action='/expenses'>
									<div class='form-group'>
										<label for='exampleFormControlInput1'>Amount</label>
										<input
											type='text'
											class='form-control'
											id='exampleFormControlInput1'
											name='amount'
											required
										/>
									</div>

									<div className='form-group'>
										<label for='exampleFormControlSelect1'>Category</label>
										<select class='form-control' name='category'>
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
										<select class='form-control' name='payment_method' id='paymentMethod'>
											<option>Select an option...</option>
											<option value='card'>Card</option>
											<option value='cash'>Cash</option>
										</select>
									</div>
									<div className='form-group'>
										<label for='exampleFormControlSelect1'>Card</label>
										<select class='form-control' id='showAllCards' name='card_id'>
											<option>Select an option...</option>
										</select>
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
