var React = require('react');
var Layout = require('../defaultlayout');

class EditExpense extends React.Component {
    render() {
        let expense = this.props['0'];
        console.log(expense)
        return (
            <Layout>
                <div className='col-12 d-flex flex-wrap justify-content-center'>
                    <div className='col-6'>
                        <div className='card-body'>
                            <h1 className='card-title text-center'>Edit expense</h1>
                            <p>
                                <form className='m-3' method='POST' action={'/expenses/' + expense.id + '?_method=put'}>
                                    <div className='form-group'>
                                        <label>Date</label>
                                        <input
                                            type='date'
                                            className='form-control'
                                            name='date'
                                            id='datePicker'
                                            required
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Amount</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='amount'
                                            defaultValue={expense.amount}
                                            required
                                        />
                                    </div>
                                    <div className='form-group'>
										<label>Category</label>
										<select className='form-control' name='category'>
											<option>Select a Category...</option>
											<option value='Beauty'>Beauty & Wellness</option>
											<option value='Dining'>Dining</option>
											<option value='Entertainment'>Entertainment</option>
											<option value='Family'>Family</option>
											<option value='Fashion'>Fashion</option>
											<option value='Transport'>Transport</option>
											<option value='Travel'>Travel</option>
										</select>
									</div>
                                    <div className='form-group'>
                                        <label>Card ID</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='card_id'
                                            defaultValue={expense.card_id}
                                            required
                                        />
                                    </div>
                                    <input type='submit' value='Submit' className='m-2' />
                                </form>
                            </p>
                        </div>
                    </div>
                </div>
				<script src='/scriptofcards.js' />
            </Layout>
        );
    }
}

module.exports = EditExpense;
