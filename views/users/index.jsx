var React = require('react');
var Layout = require('../defaultlayout');

class Login extends React.Component {
	render() {
		// console.log('wowowowowo');
		// console.log(this.props.loggedin);
		// if (this.props.loggedin != undefined) {
		// 	console.log('already logged in');
		// 	return (
		// 		<Layout>
		// 			<div className='text-center col-12 d-flex flex-wrap justify-content-center'>
		// 				<h2 class='m-3 col-12'>Already logged in</h2>
		// 			</div>
		// 		</Layout>
		// 	);
		// } else {

			// console.log('not logged in');
			return (
				<Layout>
					<div className='text-center col-12 d-flex flex-wrap justify-content-center'>
						<div class='card-5 col-6'>
							<img src='octopus.jpeg' class='card-img-top col-5' alt='...' />
							<div class='card-body'>
								<h5 class='card-title'>Log in</h5>
								<p>
									<form class='m-3 justify-content-end' method='POST' action='/login'>
										Username: <input type='text' name='username' required />
										<br />
										Password: <input type='text' name='password' required />
										<br />
										<input type='submit' value='Submit' className='m-2' />
									</form>
									<a href="/register" ><p>Don't have an account?</p></a>
								</p>
							</div>
						</div>
					</div>
				</Layout>
			);
		}
	}
// }

module.exports = Login;
