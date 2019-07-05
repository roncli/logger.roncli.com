const Common = require("../includes/common"),
    LoginView = require("../../public/views/login"),
    settings = require("../../settings");

/**
 * @typedef {import("express").Request} Express.Request
 * @typedef {import("express").Response} Express.Response
 */

//  #                      #
//  #
//  #       ###    ## #   ##    # ##
//  #      #   #  #  #     #    ##  #
//  #      #   #   ##      #    #   #
//  #      #   #  #        #    #   #
//  #####   ###    ###    ###   #   #
//                #   #
//                 ###
/**
 * A class that represents the login page.
 */
class Login {
    //              #
    //              #
    //  ###   ##   ###
    // #  #  # ##   #
    //  ##   ##     #
    // #      ##     ##
    //  ###
    /**
     * Processes the request.
     * @param {Express.Request} req The request.
     * @param {Express.Response} res The response.
     * @returns {void}
     */
    static get(req, res) {
        res.status(200).send(Common.page(
            /* html */`
                <link rel="stylesheet" href="/css/login.css" />
            `,
            LoginView.get(req.originalUrl || "/"),
            req
        ));
    }

    //                     #
    //                     #
    // ###    ##    ###   ###
    // #  #  #  #  ##      #
    // #  #  #  #    ##    #
    // ###    ##   ###      ##
    // #
    /**
     * Processes the request.
     * @param {Express.Request} req The request.
     * @param {Express.Response} res The response.
     * @returns {void}
     */
    static post(req, res) {
        if (req.body.username && req.body.password && settings.users[req.body.username] === req.body.password) {
            req.session.username = req.body.username;
            req.session.password = req.body.password;
            req.session.ip = (req.headers["x-forwarded-for"] ? req.headers["x-forwarded-for"] : void 0) || req.ip;

            res.redirect(req.body.return || "/");
        } else {
            res.status(200).send(Common.page(
                /* html */`
                    <link rel="stylesheet" href="/css/login.css" />
                `,
                LoginView.get(req.body.return, true),
                req
            ));
        }
    }
}

Login.route = {
    path: "/login"
};

module.exports = Login;
