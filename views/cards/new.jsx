var React = require('react');
var Layout = require('../defaultlayout');

class New extends React.Component {
	render() {
		return (
			<Layout>
				<div className='text-center col-12 d-flex flex-wrap justify-content-center'>
					<div class='card m-3 col-6'>
						<div class='card-body'>
							<h1 class='card-title'>Add new card</h1>
							<p>
								<form class='m-3 justify-content-end' method='POST' action='/cards'>
									Bank: {' '}
									<select name='bank'>
										<option value='UOB'>UOB</option>
									</select>
									<br />
									<br />
									Card: {' '}
									<select name='card'>
										<option value='card'>Select a card...</option>
									</select>
									<br />
									<br />
									<input type='submit' value='Submit' className='m-2' />

								</form>
							</p>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

module.exports = New;
