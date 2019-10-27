var React = require('react');
var Layout = require('../defaultlayout');

class Home extends React.Component {
	render() {
		// console.log(cardsData);
		const jumbopic = 'watercolour.jpeg';
		const jumbo = {
			backgroundImage: `url(${jumbopic})`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat'
		}

		let cardsData = this.props.data;
		let cardRates = this.props.cardRates;

		let cards = cardsData.map((el) => {
			let allThresholds = cardRates.filter(rate => rate.card_id === el.card_id)
			// checks if the card id is the one currently being checked, and if the amount is less than the spend threshold

			let currentThreshold = allThresholds.find(thing => el.sum < thing.spend_threshold);
			if (currentThreshold !== undefined) {

				console.log('allThresholds', allThresholds)
				console.log('currentThreshold', currentThreshold)
				let string = el.sum / currentThreshold.spend_threshold * 100 + '%';

				return (
					<div className='card col-5 m-1'>
						<div className='card-body'>
							<h4 className='card-title'>
								<strong>{el.bank}</strong> {el.name}
							</h4>
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
								<div className='d-flex justify-content-end m-1'>
									<span>Threshold: ${currentThreshold.spend_threshold}</span>
								</div>
								{/* Spend ${allThresholds.spend_threshold} to get a rate of {allThresholds[1].rate * 100}% */}
							</p>
						</div>
					</div>
				);
			} else {
				return (
					<div className='card col-5 m-1'>
						<div className='card-body'>
							<h4 className='card-title'>
								<strong>{el.bank}</strong> {el.name}
							</h4>
							<p className='card-text'>
								Spent on this card: ${el.sum} <br />
								<span>Threshold: $0</span>
							</p>
						</div>
					</div>
				)
			}
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
