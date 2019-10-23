var React = require('react');

class DefaultLayout extends React.Component {
	render() {
		const navStyle = {
			backgroundColor: '#78a9cc'
		};

		const imgStyle = {
			width: '100%',
			maxWidth: '400px',
			textAlign: 'center'
		};
		return (
			<html>
				<head>
					<link
						rel='stylesheet'
						href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
						integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO'
						crossOrigin='anonymous'
					/>
					<link rel='stylesheet' href='/css/theme.css' />
					<title>octo rewards</title>
				</head>
				<body>
					<nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
						<a className='navbar-brand' href='#'>
							octo
						</a>
						<button
							className='navbar-toggler'
							type='button'
							data-toggle='collapse'
							data-target='#navbarNavAltMarkup'
							aria-controls='navbarNavAltMarkup'
							aria-expanded='false'
							aria-label='Toggle navigation'>
							<span className='navbar-toggler-icon' />
						</button>
						<div className='navbar-collapse collapse justify-content-center' id='collapsingNavbar'>
							<div className='navbar-nav'>
								<a className='nav-item nav-link' href='/expenses'>
									Expenses <span className='sr-only'>(current)</span>
								</a>
								<a className='nav-item nav-link' href='/expenses/new'>
									New
								</a>
								<a className='nav-item nav-link' href='/register'>
									Register
								</a>
								<a className='nav-item nav-link' href='/login'>
									Login
								</a>
							</div>
						</div>
					</nav>

					<div>{this.props.children}</div>
				</body>
			</html>
		);
	}
}

module.exports = DefaultLayout;
