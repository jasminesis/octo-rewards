const sha256 = require('js-sha256')

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let index = (request, response) => {
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
            } else if (error) {
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
        let userId = request.params.userId;
        console.log("I'm in card controllers - finding card or cash = ", userId)
        if (userId) {
            // need to get user ID from scriptofcards.js
            console.log("cookie user id", userId);

            db.cards.getAll(userId, (error, result) => {
                if (result) {
                    console.log('result is~~~~~~~~~~~~~~', result)
                    const data = {
                        result: result
                    }
                    console.log("data is !!!!!!", data)
                    response.send(data);
                } else {
                    console.log("AHHHHHHHHH")
                }
            })
        } else {
            console.log("it's cash")
        }
    };

    let showAllcards = (request, response) => {
        db.cards.getAllcards((error, result) => {
            if (result) {
                const data = {
                    result: result
                }
                console.log("data for all cards", data)
                // response.send("something should be showing!")
                response.render('allcards/index', data)
            } else if (error) {
                console.log(error)
            }
        })
    };

    let newAllcard = (request, response) => {
        response.render('allcards/new')
    };
    let postNewAllcard = (request, response) => {
        let cardInfo = request.body;

        console.log("cardId", cardInfo)

        db.cards.newAllcard(cardInfo, (error, postCard) => {
            if (postCard) {
                console.log("postCard", postCard);
                response.redirect('/allcards');
            } else {
                console.log("nope, no result??")
            }
        })
    };
    let showEditAllcard = (request, response) => {
        db.cards.allcardById(request.params.id, (err, result) => {
            if (result) {
                response.render('allcards/edit', result)
            } else {
                console.log(err)
            }
        })
    }
    let editAllcard = (request, response) => {
        db.cards.allcardUpdate(request.body, request.params.id, (err, result) => {
            if (result) {
                response.redirect('/allcards/')
            } else {
                console.log(err)
                console.log('stuck at edit allcard')
            }
        })
    }
    let showDeleteAllcard = (request, response) => {
        db.cards.allcardById(request.params.id, (err, result) => {
            if (result) {
                console.log('HERE!!!')
                response.render('allcards/delete', result)
            } else {
                console.log(err)
            }
        })
    }
    let deleteAllcard = (request, response) => {
        db.cards.allcardDelete(request.params.id, (err, result) => {
            if (result) {
                console.log('THERE!!!!!')
                response.redirect('/allcards')
            } else {
                console.log(err)
                console.log('couldn\'t delete ')
            }
        })
    }
    let getAllBanks = (request, response) => {
        db.cards.getAllcards((error, result) => {
            if (result) {
                const data = {
                    result: result
                }
                console.log("data for all cards", data)
                // response.send("something should be showing!")
                response.send(data)
            } else if (error) {
                console.log(error)
            }
        })
    };


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index,
        newCard,
        postNewCard,
        getAllCards,
        showCardsForExpensePage,
        showAllcards,
        newAllcard,
        postNewAllcard,
        showEditAllcard,
        editAllcard,
        showDeleteAllcard,
        deleteAllcard,
        getAllBanks,
    };

}