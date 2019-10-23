module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let homeControllerCallbacks = (request, response) => {
        response.render('home/home')
    };


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index: homeControllerCallbacks,
    };

}