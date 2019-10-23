var React = require('react');
var Layout = require('../defaultlayout');

class Expenses extends React.Component {
	render() {
		console.log("From the index.jsx file", this.props);
		const expenses = this.props.result.map(el => {
			return (
				<div className='card-5'>
						<div className='card-body'>
							<h5 className='card-title'>Expense</h5>
							<p className="card-text">
								Amount: {el.amount} <br/>
								Category: {el.category} <br/>
								Card: {el.card_id} <br/>
							</p>
						</div>
					</div>
			)
		})
		return (
			<Layout>
				<div className='text-center col-12 d-flex flex-wrap justify-content-center'>
					<div className='card-5 col-6'>
						<img src='octopus.jpeg' className='card-img-top col-5' alt='...' />
						<div className='card-body'>
							<h5 className='card-title'>All expenses</h5>
							{expenses}
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

module.exports = Expenses;
