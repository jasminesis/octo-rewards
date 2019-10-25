const sha256 = require('js-sha256')

module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope


    let cards = (userId, callback) => {

        console.log(userId)
        userId = [userId]

        let query = 'SELECT * FROM cards INNER JOIN (SELECT card_id, sum(amount) FROM (SELECT * FROM expenses WHERE user_id = ($1)) AS mushrooms GROUP BY card_id) AS potatoes ON cards.id = potatoes.card_id';

        console.log(query)

        dbPoolInstance.query(query, userId, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                    console.log('invalid - no such id')
                }
            }
        });
    };

    return {
        cards,
    };
};
