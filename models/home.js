const sha256 = require('js-sha256')

module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope


    let cards = (userId, callback) => {

        console.log(userId)
        userId = [userId]

        // this query returns the sum spent on each card, and card information to display onto userhome.jsx

        let query = 'SELECT * FROM cards INNER JOIN (SELECT card_id, sum(amount) FROM (SELECT * FROM expenses WHERE user_id = ($1)) AS mushrooms GROUP BY card_id) AS potatoes ON cards.id = potatoes.card_id';

        // console.log(query)


        dbPoolInstance.query(query, userId, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    console.log('uh oh, no id or empty expenses or cards');
                    callback(null, null);

                }
            }
        });
    };
    let getCardRates = (userId, callback) => {

        console.log(userId)
        userId = [userId]
        // this query gets the card_rates table for the cards a user has

        let query = 'SELECT card_rates.card_id, card_rates.spend_threshold, card_rates.rate FROM (SELECT * FROM card_owners WHERE user_id = ($1)) AS cards_owned INNER JOIN card_rates ON card_rates.card_id = cards_owned.card_id ORDER BY card_rates.spend_threshold'

        console.log(query)

        dbPoolInstance.query(query, userId, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                    console.log('oh no, no thresholds for cards owned')
                }
            }
        })
    };

    return {
        cards,
        getCardRates,
    };
};