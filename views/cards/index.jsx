var React = require('react');
var Layout = require('../defaultlayout');

class Cards extends React.Component {
	render() {
		const imgStyle = {
			maxWidth: '50%',
			width: 'auto',
			height: 'auto',
			display: 'block',
			margin: '10px auto'
	}
		console.log('From the index.jsx file', this.props.result);
		if (this.props.result === undefined) {
			console.log("it's a message")
			return (
				<Layout>
					<h1 className='text-center m-3 display-3'>No cards yet</h1>
					<div className='text-center col-12'>
						<a href='/cards/new'>
							<button type='button' class='btn btn-outline-dark btn-lg m-3'>
								Add a new card &raquo;
							</button>
						</a>
					</div>
				</Layout>
			);
		}
		const cards = this.props.result.map((el) => {
			return (
				<div className='card col-5 m-2'>
					<div className='card-body'>
						<h5 className='card-title'>{el.bank} {el.name}</h5>
					<img src={el.image_url} className="card-img" style={imgStyle} alt="..."></img>
						<p className='card-text'>
							Type: {el.type} <br/>
							Description: {el.description} <br />
							Maximum cap: {el.unit} {el.max}
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

module.exports = Cards;
