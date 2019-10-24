var React = require('react');
var Layout = require('../defaultlayout');

class New extends React.Component {
	render() {
		return (
			<Layout>
				<div className='text-center col-12 d-flex flex-wrap justify-content-center'>
					<div className='card m-3 col-6'>
						<div className='card-body'>
							<h1 className='card-title'>Add new card</h1>
							<p>
								<form className='m-3 justify-content-end' method='POST' action='/cards'>
									Bank: {' '}
									<select name='bank' id="showBanks">
									<option>Select a bank...</option>

										<option value='UOB'>UOB</option>
										<option value='Citi'>Citi</option>
									</select>
									<br />
									<br />
									Card: {' '}
									<select name='card' id="showCardsByBank">
										<option>Select a card...</option>
									</select>
									<br />
									<br />
									<input type='submit' value='Submit' className='m-2' />
 
								</form>
							</p>
						</div>
					</div>
				</div>
				<script src="/script.js"></script>
			</Layout>
		);
	}
}

module.exports = New;
