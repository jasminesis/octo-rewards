var React = require('react');
var Layout = require('../defaultlayout');

class EmptyHome extends React.Component {
    render() {
        const jumbopic = 'watercolour.jpeg';
        const jumbo = {
            backgroundImage: `url(${jumbopic})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
        return (
            <Layout>
                <div className='jumbotron jumbotron-fluid' style={jumbo}>
                    <div className='container'>
                        <h1 className='display-4'>OCTO REWARDS for logged in users</h1>
                    </div>
                </div>
                <div className='text-center col-12'>
                    <h1 className="display-4 m-5">No cards or expenses yet.</h1>
                    <a href='/cards/new'>
							<button type='button' class='btn btn-outline-dark btn-lg m-3'>
								Add some cards! &raquo;
							</button>
						</a>
                    <a href='/expenses/new'>
							<button type='button' class='btn btn-outline-dark btn-lg m-3'>
								Add some expenses &raquo;
							</button>
						</a>
                </div>
            </Layout>
        );
    }
}
module.exports = EmptyHome;
