var React = require('react');
var Layout = require('../defaultlayout');

class AllCards extends React.Component {
    render() {
        console.log('From the index.jsx file for all cards', this.props);
        const cards = this.props.result.map((el) => {
            return (
                <div className='card col-8 m-2'>
                    <div className='card-body'>
                        <h5 className='card-title'>{el.bank} {el.name}</h5>
                        <p className='card-text'>
                            Description: {el.description} <br />
                            Type: {el.type} <br />
                            Category based: {' ' + el.category_based} <br />
                            Maximum: {el.unit}{el.max} <br />
                        </p>
                    </div>
                </div>
            );
        });
        return (
            <Layout>
                <h1 className='text-center m-3 display-3'>All cards</h1>
                <div className='text-center col-12 d-flex flex-wrap justify-content-center'>{cards}</div>
            </Layout>
        );
    }
}

module.exports = AllCards;
