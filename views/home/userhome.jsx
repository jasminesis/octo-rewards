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

			// all thresholds is all the rates for the card being checked
			let allThresholds = cardRates.filter(rate => rate.card_id === el.card_id)
			let lastIndex = allThresholds.length - 1;
			console.log(lastIndex)

			// current threshold is the next threshold above the current spend 
			let currentThreshold = allThresholds.find(current => el.sum < current.spend_threshold);

			// if there is a threshold above the current spend 
			if (currentThreshold !== undefined) {

				console.log('allThresholds', allThresholds)
				console.log('currentThreshold', currentThreshold)

				// making the progress bar percentage
				let string = el.sum / currentThreshold.spend_threshold * 100 + '%';

				// TODO: what about when the user has spent over the last threshold??

				return (
					<div className='card col-5 m-1'>
						<div className='card-body'>
							<h3 className='card-title'>
								<strong>{el.bank}</strong> {el.name}
							</h3>
							<h5>
								{el.type}
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
								<div className='d-flex justify-content-end m-1'>
									<span>Threshold: ${currentThreshold.spend_threshold}</span>
								</div>
								Spend ${allThresholds[lastIndex].spend_threshold} to get a rate of {allThresholds[lastIndex].rate * 100}%
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
							<h5>
								{el.type}
							</h5>
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
