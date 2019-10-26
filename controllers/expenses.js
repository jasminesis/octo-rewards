const sha256 = require('js-sha256')

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let showAllExpenses = (request, response) => {
        let userId = request.cookies["loggedIn"];
        console.log("cookie user id", userId);
        db.expenses.getAllExpensesById(userId, (error, result) => {
            if (result) {
                // console.log('result is~~~~~~~~~~~~~~`', result)
                const data = {
                    result: result
                }
                console.log("data is !!!!!!", data)
                response.render('expenses/index', data)
            } else {
                response.render('users/index')
            }
        })
    };
    let newExpense = (request, response) => {
        response.render('expenses/new')
    };


    let postNewExpense = (request, response) => {
        let userId = request.cookies["loggedIn"];
        let expenseInfo = {
            results: request.body,
            userId: userId
        };
        console.log("expenseInfo", expenseInfo)

        db.expenses.newExpense(expenseInfo, (error, postExpense) => {
            if (postExpense) {
                console.log("postExpense", postExpense);

                response.render('expenses/new')
            } else {
                response.send("Oh shit")
            }
        })
    };


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        showAllExpenses,
        newExpense,
        postNewExpense,
    };

}