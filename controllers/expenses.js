const sha256 = require('js-sha256')

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let showAllExpenses = (request, response) => {
        let userId = request.cookies["loggedIn"];
        if (userId) {
            // console.log("cookie user id", userId);
            db.expenses.getAllExpensesById(userId, (error, result) => {
                if (result) {
                    // console.log('result is~~~~~~~~~~~~~~`', result)
                    const data = {
                        result: result
                    }
                    console.log("data is !!!!!!", data)
                    response.render('expenses/index', data)
                } else {
                    response.render('expenses/fail')
                }
            })
        } else {
            response.redirect('/login')
        }
    };
    let newExpense = (request, response) => {
        response.render('expenses/new')
    };


    let postNewExpense = (request, response) => {
        let userId = request.cookies["loggedIn"];
        if (userId) {
            let expenseInfo = {
                results: request.body,
                userId: userId
            };
            console.log("expenseInfo", expenseInfo)

            db.expenses.newExpense(expenseInfo, (error, postExpense) => {
                if (postExpense) {
                    console.log("postExpense", postExpense);

                    response.redirect('/expenses')
                } else {
                    response.send("Adding new expense failed")
                }
            })
        } else {
            response.redirect('/login')
        }
    };


    let showExpenseById = (request, response) => {
        db.expenses.getExpenseById(request.params.id, (err, result) => {
            if (result) {
                console.log(result)
                response.render('expenses/one', result)
            } else {
                console.log(err)
            }
        })
    }
    let showEditExpense = (request, response) => {
        db.expenses.getExpenseById(request.params.id, (err, result) => {
            if (result) {
                response.render('expenses/edit', result)
            } else {
                console.log(err)
            }
        })
    }
    let editExpense = (request, response) => {
        db.expenses.expenseUpdate(request.body, request.params.id, (err, result) => {
            if (result) {
                response.redirect('/expenses/')
            } else {
                console.log(err)
                console.log('stuck at edit expense')
            }
        })
    }
    let showDeleteExpense = (request, response) => {
        db.expenses.getExpenseById(request.params.id, (err, result) => {
            if (result) {
                console.log('HERE!!!')
                response.render('expenses/delete', result)
            } else {
                console.log(err)
            }
        })
    }
    let deleteExpense = (request, response) => {
        db.expenses.deleteExpense(request.params.id, (err, result) => {
            if (result) {
                console.log('Deleting')
                response.redirect('/expenses')
            } else {
                console.log(err)
                console.log('couldn\'t delete ')
            }
        })
    }

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        showAllExpenses,
        newExpense,
        postNewExpense,
        showExpenseById,
        showEditExpense,
        editExpense,
        showDeleteExpense,
        deleteExpense
    };

}