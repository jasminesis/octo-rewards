/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const sha256 = require('js-sha256')

module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let loggingIn = (loginInfo, callback) => {

        let {
            username,
            password
        } = loginInfo;
        console.log(password)
        let hashedReqPassword = sha256(password);
        console.log(hashedReqPassword)

        let query = `SELECT * FROM users WHERE username = '${username}'`;

        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {

                // invoke callback function with results after query has executed
                callback(error, null);

            } else {

                // invoke callback function with results after query has executed

                if (queryResult.rows.length > 0 && queryResult.rows[0].password === hashedReqPassword) {
                    console.log("yay logging in", queryResult.rows)
                    callback(null, queryResult.rows);

                } else {
                    // if username is not found 
                    callback(null, null);
                    console.log('invalid username!')

                }
            }
        });
    };

    let registerNew = (registerInfo, callback) => {

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
        loggingIn,
        registerNew,
    };
};