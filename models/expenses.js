/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const sha256 = require('js-sha256')

module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let getAllExpensesById = (userId, callback) => {

        console.log(userId)
        let query = `SELECT * FROM (SELECT cards.bank, cards.name, expenses.* FROM cards INNER JOIN expenses ON expenses.card_id = cards.id) AS potato WHERE user_id = '${userId}' ORDER BY name`;
        // console.log(query)
        dbPoolInstance.query(query, (error, queryResult) => {
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

    let newExpense = (registerInfo, callback) => {

        let query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *';
        const newUserArr = [registerInfo.username, sha256(registerInfo.password)]
        console.log("newUserArr", newUserArr)

        dbPoolInstance.query(query, newUserArr, (error, queryResult) => {
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

    return {
        getAllExpensesById,
        newExpense,
    };
};