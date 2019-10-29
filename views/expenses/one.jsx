var React = require('react');
var Layout = require('../defaultlayout');

class OneExpense extends React.Component {
	render() {
        let expense = this.props[0]
		return (
			<Layout>
				<div className='col-12 d-flex flex-wrap justify-content-center'>
					<div className='col-6 card'>
						<div className='card-body'>
							<h1 className='card-title text-center'> Expense</h1>
							<p>
                            Date: {expense.date} <br/>
                            Amount: {expense.amount}<br/>
                            Category: {expense.category}<br/>
                            Payment method: {expense.payment_method}<br/>
                            Card ID: {expense.card_id}
							</p>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

module.exports = OneExpense;
