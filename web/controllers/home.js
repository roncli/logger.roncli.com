const Common = require("../includes/common"),
    HomeView = require("../../public/views/home"),
    Log = require("../../src/models/log");

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
     * @returns {Promise} A promise that resolves when the request has been completed.
     */
    static async get(req, res) {
        const logs = await Log.getOldest100();

        res.status(200).send(Common.page(
            /* html */`
                <link rel="stylesheet" href="/css/home.css" />
            `,
            HomeView.get(logs),
            req
        ));
    }
}

Home.route = {
    path: "/"
};

module.exports = Home;
