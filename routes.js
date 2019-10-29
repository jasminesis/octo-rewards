module.exports = (app, allModels) => {

    // // require the controller
    const homeControllerCallbacks = require('./controllers/home')(allModels);
    const usersControllerCallbacks = require('./controllers/users')(allModels);
    const expensesControllerCallbacks = require('./controllers/expenses')(allModels);
    const cardsControllerCallbacks = require('./controllers/cards')(allModels);

    // all routes

    app.get('/', homeControllerCallbacks.index);
    app.get('/home', homeControllerCallbacks.display)

    app.get('/login', usersControllerCallbacks.index);
    app.post('/login', usersControllerCallbacks.login);
    app.get('/register', usersControllerCallbacks.register);
    app.post('/register', usersControllerCallbacks.postRegister);
    app.get('/logout', usersControllerCallbacks.logout);


    app.get('/expenses', expensesControllerCallbacks.showAllExpenses);
    app.get('/expenses/new', expensesControllerCallbacks.newExpense);
    app.post('/expenses', expensesControllerCallbacks.postNewExpense);
    // app.get('/expenses/:id', expensesControllerCallbacks.showExpenseById);
    app.get('/expenses/:id/edit', expensesControllerCallbacks.showEditExpense);
    app.put('/expenses/:id', expensesControllerCallbacks.editExpense);
    app.get('/expenses/:id/delete', expensesControllerCallbacks.showDeleteExpense);
    app.delete('/expenses/:id', expensesControllerCallbacks.deleteExpense);

    app.get('/cards', cardsControllerCallbacks.index);
    app.get('/cards/new', cardsControllerCallbacks.newCard);
    app.post('/cards', cardsControllerCallbacks.postNewCard);

    // all cards
    app.get('/allcards', cardsControllerCallbacks.showAllcards);
    app.get('/allcards/new', cardsControllerCallbacks.newAllcard);
    app.post('/allcards', cardsControllerCallbacks.postNewAllcard);

    app.get('/allcards/:id/edit', cardsControllerCallbacks.showEditAllcard)
    app.put('/allcards/:id', cardsControllerCallbacks.editAllcard)
    app.get('/allcards/:id/delete', cardsControllerCallbacks.showDeleteAllcard)
    app.delete('/allcards/:id', cardsControllerCallbacks.deleteAllcard)


    app.get('/mydata/:bank', cardsControllerCallbacks.getAllCards)
    app.get('/mydata/banks/:bank', cardsControllerCallbacks.getAllBanks)
    app.get('/mydata/expenses/:userId', cardsControllerCallbacks.showCardsForExpensePage)

};