var React = require('react');
var Layout = require('../defaultlayout');

class AllCards extends React.Component {
    render() {
        console.log('Results from the index.jsx file for all cards', this.props.result);
        const newRow = this.props.result.map((el, index) => {
            return (

                <tr>
                    <th scope="row">{el.id}</th>
                    <td>{el.bank}</td>
                    <td>{el.name}</td>
                    <td>{el.description}</td>
                    <td>{el.type}</td>
                    <td>{' ' + el.category_based}</td>
                    <td>{el.unit} {el.max}</td>
                    <td><a href={'/allcards/' + el.id + '/edit'}>
                        <i className="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></a></td>
                    <td><a href={'/allcards/' + el.id + '/delete'}>
                        <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i></a></td>
                </tr>

            );
        });
        return (
            <Layout>
                <h1 className='text-center m-3 display-3'>All cards</h1>
                <div className='d-flex justify-content-center'>
                    <table class="table col-10">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Bank</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Type</th>
                                <th scope="col">Category based?</th>
                                <th scope="col">Maximum cap</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newRow}
                        </tbody>
                    </table>
                </div>
                    <div className='text-center col-12'>
						<a href='/allcards/new'>
							<button type='button' class='btn btn-outline-dark btn-lg m-3'>
								Add a new card to the database &raquo;
							</button>
						</a>
					</div>

            </Layout>
        );
    }
}

module.exports = AllCards;
