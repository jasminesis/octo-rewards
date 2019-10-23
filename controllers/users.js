module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let usersControllerCallbacks = (request, response) => {
        response.render('users/index');
    };
    let postLogin = (request, response) => {
        let loginInfo = request.body;
        console.log("loginInfo", loginInfo)
    }
    let postRegister = (request, response) => {
        let registerInfo = request.body;
        console.log("registerInfo ", registerInfo)

    }


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index: usersControllerCallbacks,
        login: postLogin,
        register: postRegister,
    };

}