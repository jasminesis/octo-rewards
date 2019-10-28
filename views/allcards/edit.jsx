var React = require('react');
var Layout = require('../defaultlayout');

class EditAllcard extends React.Component {
    render() {
        let card = this.props['0'];
        console.log(card)
        return (
            <Layout>
                <div className='col-12 d-flex flex-wrap justify-content-center'>
                    <div className='col-6'>
                        <div className='card-body'>
                            <h1 className='card-title text-center'>Edit {card.bank} {card.name}</h1>
                            <p>
                                <form className='m-3' method='POST' action={'/allcards/' + card.id + '?_method=put'}>
                                    <div className='form-group'>
                                        <label>Bank</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='bank'
                                            defaultValue={card.bank}
                                            required
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Card Name</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='name'
                                            defaultValue={card.name}
                                            required
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Description</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='description'
                                            defaultValue={card.description}
                                            required
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Type</label>
                                        <select className='form-control' name='type'>
                                            <option>Select a Type</option>
                                            <option selected value='Cashback'>Cashback</option>
                                            <option value='Rebate'>Rebate</option>
                                            <option value='Reward'>Reward</option>
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <label>Category based?</label>
                                        <select className='form-control' name='category_based'>
                                            <option>Select true or false</option>
                                            <option value='true'>True</option>
                                            <option selected value='false'>False</option>
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <label>Maximum cap on points/cashback/rebate</label>
                                        <input
                                            type='number'
                                            className='form-control'
                                            name='max'
                                            defaultValue={card.max}
                                            required
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Unit for maximum</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='unit'
                                            defaultValue={card.unit}
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

module.exports = EditAllcard;
