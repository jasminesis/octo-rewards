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
		const imgStyle = {
			maxWidth: '50%',
			width: 'auto',
			height: 'auto',
			display: 'block',
			margin: '10px auto'
	}

		let cardsData = this.props.data;
		let cardRates = this.props.cardRates;

		let cards = cardsData.map((el) => {

			// all thresholds is all the rates for the card being checked
			let allThresholds = cardRates.filter(rate => rate.card_id === el.card_id)
			let lastIndex = allThresholds.length - 1;
			console.log(lastIndex)


			let passedThreshold = allThresholds.filter(current => el.sum > current.spend_threshold)
			let currentThreshold;

			if (passedThreshold.length === 0) {
				// this means there are no passed thresholds which means the current threshold rate is 0
				currentThreshold = { rate: 0 }
			} else {
				let index = passedThreshold.length - 1;
				currentThreshold = passedThreshold[index]
			}

			// next threshold is the next threshold above the current spend 
			let nextThreshold = allThresholds.find(next => el.sum < next.spend_threshold);

			// if there is a threshold above the current spend 
			if (nextThreshold !== undefined) {

				console.log('allThresholds', allThresholds)
				console.log('nextThreshold', nextThreshold)

				// making the progress bar percentage
				let string = el.sum / nextThreshold.spend_threshold * 100 + '%';

				return (
					<div className='card col-5 m-1'>
						<div className='card-body'>
							<h3 className='card-title'>
								<strong>{el.bank}</strong> {el.name}
							</h3>
							<img src={el.image_url} className="card-img" style={imgStyle} alt="..."></img>

							<h5>
								{el.type}
							</h5>
							<p className='card-text'>
								Spent ${el.sum} <br />
								<div className='progress'>
									<div
										className='progress-bar progress-bar-striped bg-success'
										role='progressbar'
										style={{ width: string }}
										aria-valuenow={string}
										aria-valuemin='0'
										aria-valuemax='100'
									/>
									{string}
								</div>
								<div className='d-flex justify-content-end m-1'>
									<span>Threshold: ${nextThreshold.spend_threshold}</span>
								</div>
								<p>current rate: {currentThreshold.rate}</p>
								Spend ${allThresholds[lastIndex].spend_threshold} to get a rate of {allThresholds[lastIndex].rate * 100}%
							</p>
						</div>
					</div>
				);
				// for no minimum spend
			} else if (allThresholds[0].spend_threshold === 0) {
				console.log('no min spend')
				return (
					<div className='card col-5 m-1'>
						<div className='card-body'>
							<h4 className='card-title'>
								<strong>{el.bank}</strong> {el.name}
							</h4>
							<img src={el.image_url} className="card-img" style={imgStyle} alt="..."></img>

							<h5>
								{el.type}
							</h5>
							<p className='card-text'>
								Spent ${el.sum} <br />
								<div class="alert alert-info" role="alert">
									No minimum spend
								</div>
								{el.type}: ${el.sum * allThresholds[0].rate}
							</p>
						</div>
					</div>
				)
			} else {
				// when there is no more threshold above current spend
				console.log('no more thresholds above current')
				let string = el.sum / allThresholds[lastIndex].spend_threshold * 100 + '%';

				return (
					<div className='card col-5 m-1'>
						<div className='card-body'>
							<h3 className='card-title'>
								<strong>{el.bank}</strong> {el.name}
							</h3>
							<img src={el.image_url} className="card-img" style={imgStyle} alt="..."></img>

							<h5>
								{el.type}
							</h5>
							<p className='card-text'>
								Spent ${el.sum} <br />

								<div class="alert alert-info" role="alert">
									You have already maximised this card! Spend on another card instead.
								</div>
								<div className='progress'>
									<div
										className='progress-bar progress-bar-striped bg-danger'
										role='progressbar'
										style={{ width: string }}
										aria-valuenow={string}
										aria-valuemin='0'
										aria-valuemax='100'
									/>
									{string}
								</div>
								<div className='d-flex justify-content-end m-1'>
									<span>Threshold: ${allThresholds[lastIndex].spend_threshold}</span>
								</div>
								{el.type}: ${el.sum * allThresholds[lastIndex].rate}
							</p>
						</div>
					</div>
				);
			}
		});









		return (
			<Layout>
				<div className='jumbotron jumbotron-fluid' style={jumbo}>
					<div className='container'>
						<h1 className='display-4'>OCTO REWARDS</h1>
						<p className='lead'>
							Hello
						</p>
					</div>
				</div>
				<div className='text-center'>
					<div className='text-center col-12 d-flex flex-wrap justify-content-center'>{cards}</div>
				</div>
			</Layout>
		);
	}
}


module.exports = Home;
