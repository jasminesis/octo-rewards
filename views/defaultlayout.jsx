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
					<link rel='stylesheet' href='css/theme.css' />
					<title>octo rewards</title>
				</head>
				<body>
					<nav class='navbar navbar-expand-lg navbar-dark bg-primary'>
						<a class='navbar-brand' href='#'>
							octo
						</a>
						<button
							class='navbar-toggler'
							type='button'
							data-toggle='collapse'
							data-target='#navbarNavAltMarkup'
							aria-controls='navbarNavAltMarkup'
							aria-expanded='false'
							aria-label='Toggle navigation'>
							<span class='navbar-toggler-icon' />
						</button>
						<div class='navbar-collapse collapse justify-content-center' id='collapsingNavbar'>
							<div class='navbar-nav'>
								<a class='nav-item nav-link' href='#'>
									New <span class='sr-only'>(current)</span>
								</a>
								<a class='nav-item nav-link' href='#'>
									Register
								</a>
								<a class='nav-item nav-link' href='#'>
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
