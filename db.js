const pg = require('pg');
const url = require('url');

var configs;

if (process.env.DATABASE_URL) {

    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');

    configs = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true
    };

} else {
    configs = {
        user: 'jasminesis',
        host: '127.0.0.1',
        database: 'octo',
        port: 5432
    };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
    console.log('idle client error', err.message, err.stack);
});

// require model files
const allHomeModelsFunction = require('./models/home');
const homeModelsObject = allHomeModelsFunction(pool);

const allUserModelsFunction = require('./models/users');
const usersModelsObject = allUserModelsFunction(pool);

const allExpensesModelsFunction = require('./models/expenses');
const expensesModelsObject = allExpensesModelsFunction(pool);

const cardsModelsFunction = require('./models/cards');
const cardsModelsObject = cardsModelsFunction(pool);


// module exports
module.exports = {
    //make queries directly from here
    queryInterface: (text, params, callback) => {
        return pool.query(text, params, callback);
    },

    // get a reference to end the connection pool at server end
    pool: pool,

    home: homeModelsObject,
    users: usersModelsObject,
    expenses: expensesModelsObject,
    cards: cardsModelsObject,
};