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
		console.log('From the index.jsx file', this.props);
		const cards = this.props.result.map((el) => {
			return (
				<div className='card col-5 m-2'>
					<div className='card-body'>
						<h5 className='card-title'>{el.bank} {el.name}</h5>
					<img src={el.image_url} className="card-img" style={imgStyle} alt="..."></img>
						<p className='card-text'>
							Description: {el.description} <br />
							Rules: {el.rules} <br />
							Billing date: {el.billing_date} <br />
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
