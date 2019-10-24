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
        db.cards.getAll(userId, (error, result) => {
            if (result) {
                console.log('result is~~~~~~~~~~~~~~`', result)
                const data = {
                    result: result
                }
                console.log("data is !!!!!!", data)
                response.render('cards/index', data)
            }
            if (error) {
                console.log(error)
            } else {
                response.render('users/index')
            }
        })
    };
    let newCard = (request, response) => {
        response.render('cards/new')
    };
    let postNewCard = (request, response) => {
        // let cardJoin = request.body;
        let cardJoin = {
            user_id: 1,
            card_id: 2
        }
        console.log("postCard", cardJoin)

        db.cards.newCard(cardJoin, (error, postCard) => {
            if (postCard) {
                console.log("postCard", postCard);
                response.redirect('/');
            } else {
                response.render('users/index')
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