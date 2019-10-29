var React = require('react');
var Layout = require('../defaultlayout');

class alreadyIn extends React.Component {
    render() {
        return (
            <Layout>
                <div className='text-center col-12 d-flex flex-wrap justify-content-center'>
                    <div className='col-6'>
                        <img src='/octopus.jpeg' className='card-img-top col-5' alt='...' />
                        <div className='card-body col-12'>
                            <h2 className='card-title display-3'>Already logged in</h2>
                        </div>
                    </div>
                </div>
                <div className='text-center col-12'>
						<a href='/logout'>
							<button type='button' class='btn btn-outline-dark btn-lg m-3'>
								Log out
							</button>
						</a>
					</div>
                
            </Layout>
        );
    }
}
// }

module.exports = alreadyIn;
