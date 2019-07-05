const Common = require("../includes/common"),
    HomeView = require("../../public/views/home"),
    settings = require("../../settings");

/**
 * @typedef {import("express").Request} Express.Request
 * @typedef {import("express").Response} Express.Response
 */

//  #   #
//  #   #
//  #   #   ###   ## #    ###
//  #####  #   #  # # #  #   #
//  #   #  #   #  # # #  #####
//  #   #  #   #  # # #  #
//  #   #   ###   #   #   ###
/**
 * A class that represents the home page.
 */
class Home {
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
                <link rel="stylesheet" href="/css/home.css" />
            `,
            HomeView.get(),
            req
        ));
    }
}

Home.route = {
    path: "/"
};

module.exports = Home;
