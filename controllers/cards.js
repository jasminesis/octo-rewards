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
        let userId = request.cookies["loggedIn"];
        let cardId = request.body.card;

        let cardJoin = [userId, cardId]
        console.log("postCard", cardJoin)

        db.cards.newCard(cardJoin, (error, postCard) => {
            if (postCard) {
                console.log("postCard", postCard);
                response.redirect('/home');
            } else {
                response.render('users/index')
            }
        })
    };
    let getAllCards = (request, response) => {
        let bankName = request.params.bank;
        db.cards.getCardByBank(bankName, (error, result) => {
            if (result) {
                const data = {
                    result: result
                }
                console.log("data is !!!!!!", data)
                response.send(data);
            } else {
                console.log(error)
                console.log("AH")
            }
        })
    };


    let showCardsForExpensePage = (request, response) => {
        let cardOrCash = request.params.cardOrCash;
        console.log("I'm in card controllers - finding card or cash = ", cardOrCash)
        if (cardOrCash === 'card') {
            // need to get user ID from scriptofcards.js
            let userId = document.cookies["loggedIn"];
            console.log("cookie user id", userId);

            db.cards.getAll(userId, (error, result) => {
                if (result) {
                    console.log('result is~~~~~~~~~~~~~~', result)
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
        } else {
            console.log("it's cash")
        }
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
        getAllCards,
        showCardsForExpensePage,
    };

}