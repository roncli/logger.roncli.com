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
                <script src="/views/home/log.js"></script>
                <script src="/views/home/logs.js"></script>
                <script src="/js/home.js"></script>
            `,
            HomeView.get({logs}),
            req
        ));
    }
}

Home.route = {
    path: "/",
    requiresAuthorization: true
};

module.exports = Home;
