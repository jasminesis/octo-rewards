var React = require('react');
var Layout = require('../defaultlayout');

class Home extends React.Component {
	render() {
		let cardsData = this.props.data;
		// console.log(cardsData);
		const jumbopic = 'watercolour.jpeg';
		const jumbo = {
			backgroundImage: `url(${jumbopic})`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat'
		}
		let cards = cardsData.map((el) => {
			// if there is a minimum spend
			if (el.min_spend != 0) {
				var string = el.sum / el.min_spend * 100 + '%';
			} else {
				var string = el.sum / el.max_spend * 100 + '%';
			}

			return (
				<div className='card col-5 m-1'>
					<div className='card-body'>
						<h5 className='card-title'>
							<strong>{el.bank}</strong> {el.name}
						</h5>
						<p className='card-text'>
							Spent on this card: ${el.sum} <br />
							<div className='progress'>
								<div
									className='progress-bar progress-bar-striped bg-warning'
									role='progressbar'
									style={{ width: string }}
									aria-valuenow={string}
									aria-valuemin='0'
									aria-valuemax='100'
								/>
								{string}
							</div>
							<div className='d-flex justify-content-between m-1'>
								<span>Min spend: ${el.min_spend}</span>
								<span>Max spend: ${el.max_spend}</span>
							</div>
						</p>
					</div>
				</div>
			);
		});

		return (
			<Layout>
				<div className='text-center'>
					<h3 className='m-5 display-3'>octo rewards for logged in users</h3>
					<div className='text-center col-12 d-flex flex-wrap justify-content-center'>{cards}</div>
				</div>
			</Layout>
		);
	}
}


module.exports = Home;
