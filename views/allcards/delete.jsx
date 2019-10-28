var React = require('react');
var Layout = require('../defaultlayout');

class DeleteAllcard extends React.Component {
    render() {
        let card = this.props['0'];
        console.log(card)
        return (
            <Layout>
                <div className='col-12 d-flex flex-wrap justify-content-center'>
                    <div className='col-6'>
                        <div className='card-body'>
                            <h1 className='card-title text-center'>Delete {card.bank} {card.name}?</h1>
                            <p>
                                <form className='m-3' method='post' action={'/allcards/' + card.id + '/?_method=delete'}>
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

module.exports = DeleteAllcard;
