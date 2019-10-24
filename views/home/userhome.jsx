var React = require('react');
var Layout = require('../defaultlayout');

class Home extends React.Component {
	render() {
		let cardsData = this.props.data;
		console.log(cardsData)
		
		let cards = cardsData.map(el => {
			return (
				<div className='card col-5 m-2'>
					<div className='card-body'>
						<h5 className='card-title'>{el.card_id}</h5>
						<p className='card-text'>
							Spent on this card {el.sum} <br />
						</p>
					</div>
				</div>
			)
		})

		return (
			<Layout>
                <div className='text-center'>

                <h3 className='m-2 display-1'>octo rewards for logged in users</h3>
                <div className="container col-5">
              {cards}
                </div>
                </div>
			</Layout>
		);
	}
}

module.exports = Home;
