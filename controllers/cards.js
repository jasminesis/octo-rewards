const sha256 = require('js-sha256')

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let showAllCards = (request, response) => {
        let userId = request.cookies["loggedIn"];
        console.log("cookie user id", userId);
        db.cards.getAllCardsById(userId, (error, result) => {
            if (result) {
                // console.log('result is~~~~~~~~~~~~~~`', result)
                const data = {
                    result: result
                }
                console.log("data is !!!!!!", data)
                response.render('cards/index', data)
            } else {
                response.render('users/index')
            }
        })
    };
    let newCard = (request, response) => {
        response.render('cards/new')
    };
    let postNewCard = (request, response) => {
        let expenseInfo = request.body;
        console.log("loginInfo", expenseInfo)

        db.cards.newCard(expenseInfo, (error, postLogin) => {
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
        index: showAllCards,
        newCard,
        postNewCard,
    };

}