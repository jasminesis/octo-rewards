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
							<div class='card-body col-12'>
								<h2 class='card-title display-3'>Log in</h2>
								<p>
									<form class='m-3' method='POST' action='/login'>
										<p>Username</p><input type='text' name='username' required />
										<br />
										<br />
										<p>Password</p><input type='text' name='password' required />
										<br />
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
