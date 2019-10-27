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
                    <h2 className=" btn-lg btn btn-outline-info m-3"><a href="/cards/new">Add some cards! >></a></h2>
                    <h2 className=" btn-lg btn btn-outline-info m-3"><a href="/expenses/new">Add a new expense >></a></h2>
                </div>
            </Layout>
        );
    }
}
module.exports = EmptyHome;
