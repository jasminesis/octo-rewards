var React = require('react');
var Layout = require('../defaultlayout');

class ExpenseFail extends React.Component {
	render() {
			console.log('this one');
			return (
				<Layout>
					<h1 className='text-center m-3 display-3'>No expenses yet</h1>
					<div className='text-center col-12'>
						<a href='/expenses/new'>
							<button type='button' class='btn btn-outline-dark btn-lg m-3'>
								Add a new expense &raquo;
							</button>
						</a>
					</div>
				</Layout>
			);
        } 
    }

module.exports = ExpenseFail;
