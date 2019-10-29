const sha256 = require('js-sha256')

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let usersControllerCallbacks = (request, response) => {
        const alreadyLoggedIn = request.cookies["loggedIn"];
        if (alreadyLoggedIn) {
            response.render('users/alreadyin')
        } else {
            response.render('users/index');
        }
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
                response.redirect('/home')
            } else {
                let message = 'Please try again'
                response.redirect('login', message)
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
                console.log("this is it", postRegister)
                let hashedUsernameCookie = sha256(postRegister[0].username);
                response.cookie("username", hashedUsernameCookie)
                response.cookie("loggedIn", postRegister[0].id);
                response.redirect('/home')
            } else {
                console.log(postRegister)
                response.send("Couldn't register")
            }
        })
    };
    let logout = (request, response) => {
        response.clearCookie("username")
        response.clearCookie("loggedIn")
        response.redirect('/login')
    }

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
        logout,
    };

}