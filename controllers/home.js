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
            if (userId) {
                const cardData = {
                    data: data
                }
                console.log("data", cardData);
                response.render('home/userhome', cardData);
            } else {
                response.render('users/index')
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