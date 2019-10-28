var React = require('react');
var Layout = require('../defaultlayout');

class NewAllcard extends React.Component {
    render() {
        return (
            <Layout>
                <div className='col-12 d-flex flex-wrap justify-content-center'>
                    <div className='col-6'>
                        <div className='card-body'>
                            <h1 className='card-title text-center'>Add new card to All Cards</h1>
                            <p>
                                <form className='m-3' method='POST' action='/allcards'>
                                    <div className='form-group'>
                                        <label>Bank</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='bank'
                                            required
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Card Name</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='name'
                                            required
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Description</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='description'
                                            required
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Type</label>
                                        <select className='form-control' name='type'>
                                            <option>Select a Type</option>
                                            <option value='Cashback'>Cashback</option>
                                            <option value='Rebate'>Rebate</option>
                                            <option value='Reward'>Reward</option>
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <label>Category based?</label>
                                        <select className='form-control' name='category_based'>
                                            <option>Select true or false</option>
                                            <option value='true'>True</option>
                                            <option value='false'>False</option>
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <label>Maximum cap on points/cashback/rebate</label>
                                        <input
                                            type='number'
                                            className='form-control'
                                            name='max'
                                            required
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Unit for maximum</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='unit'
                                            required
                                        />
                                    </div>

                                    <input type='submit' value='Submit' className='m-2' />
                                </form>
                            </p>
                        </div>
                    </div>
                </div>
                <script src='/script.js' />
            </Layout>
        );
    }
}

module.exports = NewAllcard;
