/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const sha256 = require('js-sha256')

module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope


    let getAll = (userId, callback) => {

        console.log(userId)
        userId = [userId]
        let query = "SELECT * FROM (SELECT * FROM cards LEFT JOIN card_owners ON cards.id = card_owners.card_id) AS potato WHERE user_id = ($1)";
        console.log(query)
        dbPoolInstance.query(query, userId, (error, queryResult) => {
            if (error) {

                // invoke callback function with results after query has executed
                callback(error, null);

            } else {

                // invoke callback function with results after query has executed

                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);

                } else {
                    callback(null, null);
                    console.log('invalid - no such id')

                }
            }
        });
    };

    let newCard = (userId, callback) => {

        let query = 'INSERT INTO card_owners (user_id, card_id) VALUES ($1, $2) RETURNING *';
        const newCardUser = [];
        console.log("newCardUser", newCardUser)

        dbPoolInstance.query(query, newCardUser, (error, queryResult) => {
            if (error) {
                console.log("nooooo")
                console.log(error)
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult);
                } else {
                    console.log("coming here to the dark")
                    callback(null, null);
                }
            }
        });
    };

    let getCardByBank = (bankName, callback) => {
        let bank = [bankName];
        console.log("bank", bank)

        let query = "SELECT * FROM cards WHERE bank = ($1)";
        console.log(query)
        dbPoolInstance.query(query, bank, (error, queryResult) => {
            if (error) {

                // invoke callback function with results after query has executed
                callback(error, null);

            } else {

                // invoke callback function with results after query has executed

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
        getAll,
        newCard,
        getCardByBank,
    };
};