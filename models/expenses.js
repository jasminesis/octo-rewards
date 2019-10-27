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

    let newExpense = (expenseInfo, callback) => {
        let query = 'INSERT INTO expenses (user_id, date, amount, category, payment_method, card_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
        const info = expenseInfo.results;
        const newExpenseArr = [expenseInfo.userId, info.date, info.amount, info.category, info.payment_method, info.card_id]
        console.log("newExpenseArr", newExpenseArr)

        dbPoolInstance.query(query, newExpenseArr, (error, queryResult) => {
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

    return {
        getAllExpensesById,
        newExpense,
    };
};