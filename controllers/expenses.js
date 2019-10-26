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


    // FIX ADD NEW EXPENSE
    let postNewExpense = (request, response) => {
        let expenseInfo = request.body;
        console.log("loginInfo", expenseInfo)

        db.expenses.post(expenseInfo, (error, postLogin) => {
            if (postLogin) {
                console.log("postLogin", postLogin);
                let hashedUsernameCookie = sha256(postLogin[0].username);
                response.cookie("username", hashedUsernameCookie)
                response.cookie("loggedIn", postLogin[0].id);
                response.render('home/userhome')
            } else {
                let message = ['Invalid login details']
                response.render('users/index', message)
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