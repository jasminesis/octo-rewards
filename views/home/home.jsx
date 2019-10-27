var React = require('react');
var Layout = require('../defaultlayout');

class Home extends React.Component {
	render() {
		const jumbopic = 'watercolour.jpeg';
		const jumbo = {
			backgroundImage: `url(${jumbopic})`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			// color: 'white'
		}
		return (
			<Layout>
				<div className='jumbotron jumbotron-fluid' style={jumbo}>
					<div className='container'>
						<h1 className='display-4'>OCTO REWARDS</h1>
						<p className='lead'>
							Helping you maximise your credit card rewards
						</p>
					</div>
				</div>
				<div className='text-center'>
					<h3 className='m-2 display-1'>Hello</h3>
					<div className='container col-5' />
				</div>
			</Layout>
		);
	}
}

module.exports = Home;
