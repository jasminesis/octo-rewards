var React = require('react');
var Layout = require('../defaultlayout');
const moment = require('moment');

class Expenses extends React.Component {
	render() {
		console.log('From the index.jsx file', this.props.result);

			const expenses = this.props.result.map((el) => {
				return (
					<tr>
						<td>{el.bank}</td>
						<td>{el.name}</td>
						<td>{el.amount}</td>
						<td>{el.category}</td>
						<td>{moment(el.date).format('DD MMM YY')}</td>
						<td>
							<a href={'/expenses/' + el.id + '/edit'}>
								<i className='fa fa-pencil-square-o fa-lg' aria-hidden='true' />
							</a>
						</td>
						<td>
							<a href={'/expenses/' + el.id + '/delete'}>
								<i className='fa fa-trash-o fa-lg' aria-hidden='true' />
							</a>
						</td>
					</tr>
				);
			});
		

		return (
			<Layout>
				<h1 className='text-center m-3 display-3'>All expenses</h1>
				<div className='d-flex justify-content-center'>
					<table className='table col-10'>
						<thead className='thead-light'>
							<tr>
								<th scope='col'>Bank</th>
								<th scope='col'>Name</th>
								<th scope='col'>Amount</th>
								<th scope='col'>Category</th>
								<th scope='col'>Date</th>
								<th scope='col'>Edit</th>
								<th scope='col'>Delete</th>
							</tr>
						</thead>
						<tbody>{expenses}</tbody>
					</table>
				</div>
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

module.exports = Expenses;
