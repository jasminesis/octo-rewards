var React = require('react');
var Layout = require('../defaultlayout');

class Expenses extends React.Component {
	render() {
		console.log('From the index.jsx file', this.props);
		const cards = this.props.result.map((el) => {
			return (
				<div className='card col-5 m-2'>
					<div className='card-body'>
						<h5 className='card-title'>Card</h5>
						<p className='card-text'>
							{el.title} <br />
							Bank: {el.bank} <br />
							Description: {el.description} <br />
							Rules: {el.rules} <br />
							Billing date: {el.billing_date} <br />
						</p>
					</div>
				</div>
			);
		});
		return (
			<Layout>
				<h1 className='text-center m-3 display-3'>All cards</h1>
				<div className='text-center col-12 d-flex flex-wrap justify-content-center'>{cards}</div>
			</Layout>
		);
	}
}

module.exports = Expenses;
