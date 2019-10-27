module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let homeControllerCallbacks = (request, response) => {
        response.render('home/home')
    };

    let display = (request, response) => {
        let userId = request.cookies["loggedIn"];

        db.home.cards(userId, (error, data) => {
            if (data) {
                // get card rates to check spending against thresholds
                db.home.getCardRates(userId, (error, cardRates) => {
                    if (cardRates) {
                        const cardData = {
                            data,
                            cardRates,
                        }
                        console.log("data", cardData);
                        response.render('home/userhome', cardData);
                    } else {
                        response.send("something in home is nullll or wrong")
                    }
                })
            } else {
                response.render('home/emptyhome')
            }
        })
    }


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index: homeControllerCallbacks,
        display,
    };

}