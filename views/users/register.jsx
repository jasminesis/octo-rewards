var React = require('react');
var Layout = require('../defaultlayout');

class Login extends React.Component {
	render() {
		return (
			<Layout>
				<div className='text-center col-12 d-flex flex-wrap justify-content-center'>
					<div class='card-5 col-6'>
						<img src='octopus.jpeg' class='card-img-top col-5' alt='...' />
						<div class='card-body'>
							<h5 class='card-title'>Sign up</h5>
							<p>
								<form class='m-3 justify-content-end' method='POST' action='/register'>
									Username: <input type='text' name='username' required />
									<br />
									Password: <input type='text' name='password' required />
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

module.exports = Login;
