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
					<title>octo</title>
				</head>
				<body>
					<nav class='navbar navbar-expand-lg navbar-dark bg-primary text-center d-flex justify-content-center'>
						<a className='navbar-brand' href='http://localhost:3000/home'>
						octo rewards
						</a>
					</nav>
					<nav className='navbar navbar-light d-flex justify-content-around' style={{padding: '0'}}>
							<div className='navbar-nav d-flex flex-row'>
								<a className='nav-item nav-link' style={{'font-size':'0.9rem', 'margin-right':1 + 'rem'}} href='/expenses'>
									Expenses
								</a>
								<a className='nav-item nav-link' style={{'font-size':'0.9rem', 'margin-right':1 + 'rem'}} href='/expenses/new'>
									New Expense
								</a>
								<a className='nav-item nav-link' style={{'font-size':'0.9rem', 'margin-right':1 + 'rem'}} href='/cards/'>
									Cards
								</a>
								<a className='nav-item nav-link' style={{'font-size':'0.9rem', 'margin-right':1 + 'rem'}} href='/cards/new'>
									New Card
								</a>
								<a className='nav-item nav-link' style={{'font-size':'0.9rem', 'margin-right':1 + 'rem'}} href='/login'>
									Login
								</a>
						</div>
					</nav>

					<div>{this.props.children}</div>
				</body>
			</html>
		);
	}
}

module.exports = DefaultLayout;
