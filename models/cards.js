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

    let newCard = (cardJoin, callback) => {

        let query = 'INSERT INTO card_owners (user_id, card_id) VALUES ($1, $2) RETURNING *';

        dbPoolInstance.query(query, cardJoin, (error, queryResult) => {
            if (error) {
                console.log("nooooo")
                console.log(error)
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
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
    let getAllcards = (callback) => {

        let query = "SELECT * FROM cards ORDER BY id";
        console.log(query)
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let newAllcard = (cardInfo, callback) => {

        let query = 'INSERT INTO cards (bank, name, description, type, category_based, max, unit) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING * ';

        let card = cardInfo
        let newCard = [card.bank, card.name, card.description, card.type, card.category_based, card.max, card.unit]

        dbPoolInstance.query(query, newCard, (error, queryResult) => {
            if (error) {
                console.log("nooooo")
                console.log(error)
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };
    let allcardById = (id, callback) => {
        let query = 'SELECT * FROM cards WHERE id = $1';

        let cardId = [id]
        dbPoolInstance.query(query, cardId, (error, queryResult) => {
            if (error) {
                console.log("nooooo")
                console.log(error)
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        })
    }
    let allcardUpdate = (info, id, callback) => {
        let query = 'UPDATE cards SET bank = $1, name = $2, description = $3, type = $4, category_based = $5, max = $6, unit = $7 where id = $8 RETURNING *';

        let updatedCard = [info.bank, info.name, info.description, info.type, info.category_based, info.max, info.unit, id]
        dbPoolInstance.query(query, updatedCard, (error, queryResult) => {
            if (error) {
                console.log(error)
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        })
    }
    let allcardDelete = (id, callback) => {
        let query = 'DELETE cards WHERE id = $1 RETURNING *';

        let cardId = [id]
        dbPoolInstance.query(query, cardId, (error, queryResult) => {
            if (error) {
                console.log("nooooo")
                console.log(error)
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        })
    }


    return {
        getAll,
        newCard,
        getCardByBank,
        getAllcards,
        newAllcard,
        allcardById,
        allcardUpdate,
        allcardDelete,
    };
};