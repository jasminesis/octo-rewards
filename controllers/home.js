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

        db.home.cards(userId, (error, postCard) => {
            if (postCard) {
                console.log("postCard", postCard);
                response.render('/home/userhome');
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