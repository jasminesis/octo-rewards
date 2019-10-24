module.exports = (app, allModels) => {

    // // require the controller
    const homeControllerCallbacks = require('./controllers/home')(allModels);
    const usersControllerCallbacks = require('./controllers/users')(allModels);
    const expensesControllerCallbacks = require('./controllers/expenses')(allModels);
    const cardsControllerCallbacks = require('./controllers/cards')(allModels);

    // all routes

    app.get('/', homeControllerCallbacks.index);

    app.get('/login', usersControllerCallbacks.index);
    app.post('/login', usersControllerCallbacks.login);
    app.get('/register', usersControllerCallbacks.register);
    app.post('/register', usersControllerCallbacks.postRegister);


    app.get('/expenses', expensesControllerCallbacks.showAllExpenses);
    app.get('/expenses/new', expensesControllerCallbacks.newExpense);
    app.post('/expenses', expensesControllerCallbacks.postNewExpense);

    app.get('/cards', cardsControllerCallbacks.index);
    app.get('/cards/new', cardsControllerCallbacks.newCard);
    app.post('/cards', cardsControllerCallbacks.postNewCard);

    // app.get('/mydata', )
};