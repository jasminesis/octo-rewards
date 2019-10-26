var React = require('react');
var Layout = require('../defaultlayout');

class New extends React.Component {
	render() {
		return (
			<Layout>
				<div className='col-12 d-flex flex-wrap justify-content-center'>
					<div className='col-6'>
						<div className='card-body'>
							<h1 className='card-title text-center'>Add new card</h1>
							<p>
								<form className='m-3' method='POST' action='/cards'>
									<div className='form-group'>
										<label>Bank</label>
										<select className='form-control' name='bank' id='showBanks'>
											<option>Select a bank...</option>
											<option value='UOB'>UOB</option>
											<option value='Citi'>Citi</option>
										</select>
									</div>

									<div className='form-group'>
										<label>Card</label>
										<select className='form-control' name='card' id='showCardsByBank'>
											<option>Select a card...</option>
										</select>
									</div>

									<input type='submit' value='Submit' className='m-2' />
								</form>
							</p>
						</div>
					</div>
				</div>
				<script src='/script.js' />
			</Layout>
		);
	}
}

module.exports = New;
