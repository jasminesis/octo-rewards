var React = require('react');
var Layout = require('../defaultlayout');

class Expenses extends React.Component {
	render() {
		console.log('From the index.jsx file', this.props);
		const expenses = this.props.result.map((el) => {
			return (
				<div className='card col-5 m-2'>
					<div className='card-body'>
						<h5 className='card-title'>Expense</h5>
						<p className='card-text'>
							Amount: ${el.amount} <br />
							Category: {el.category} <br />
							Card: {el.card_id} <br />
						</p>
					</div>
				</div>
			);
		});
		return (
			<Layout>
				<h1 className='text-center m-3 display-3'>All expenses</h1>
				<div className='text-center col-12 d-flex flex-wrap justify-content-center'>{expenses}</div>
			</Layout>
		);
	}
}

module.exports = Expenses;
