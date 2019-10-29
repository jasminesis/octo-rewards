var React = require('react');
var Layout = require('../defaultlayout');

class DeleteExpense extends React.Component {
    render() {
        let expense = this.props['0'];
        console.log(expense)
        return (
            <Layout>
                <div className='col-12 d-flex flex-wrap justify-content-center'>
                    <div className='col-6'>
                        <div className='card-body'>
                            <h1 className='card-title text-center'>Delete?</h1>
                            <p>
                                <form className='m-3' method='post' action={'/expenses/' + expense.id + '/?_method=delete'}>
                                    <input type='submit' value='Submit' className='m-2' />
                                </form>
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

module.exports = DeleteExpense;
