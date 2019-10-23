const sha256 = require('js-sha256')

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

        db.users.loggingIn(loginInfo, (error, postLogin) => {
            if (postLogin) {
                console.log("postLogin", postLogin);
                let hashedUsernameCookie = sha256(postLogin[0].username);
                response.cookie("username", hashedUsernameCookie)
                response.cookie("loggedIn", postLogin[0].id);
                response.redirect('/')
            } else {
                let message = ['Invalid login details']
                response.render('users/index', message)
            }
        })
    };
    let register = (request, response) => {
        response.render('users/register')
    }

    let postRegister = (request, response) => {
        let registerInfo = request.body;
        console.log("registerInfo ", registerInfo)

        db.users.registerNew(registerInfo, (error, postRegister) => {
            if (postRegister) {
                response.send("registered")
            } else {
                console.log(postRegister)
                response.send("Couldn't register")
            }
        })
    };


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index: usersControllerCallbacks,
        login: postLogin,
        register,
        postRegister,
    };

}