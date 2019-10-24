var React = require('react');
var Layout = require('../defaultlayout');

class Register extends React.Component {
	render() {
		return (
			<Layout>
				<div className='text-center col-12 d-flex flex-wrap justify-content-center'>
					<div className='col-6'>
						<img src='octopus.jpeg' className='card-img-top col-5' alt='...' />
						<div className='card-body'>
							<h5 className='card-title display-3'>Sign up</h5>
							<p>
								<form className='m-3 justify-content-end' method='POST' action='/register'>
								<p>Username</p><input type='text' name='username' required />
										<br />
										<br />
										<p>Password</p><input type='text' name='password' required />
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

module.exports = Register;
