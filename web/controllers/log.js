const Common = require("../includes/common"),
    LogView = require("../../public/views/log"),
    LogModel = require("../../src/models/log");

/**
 * @typedef {import("express").Request} Express.Request
 * @typedef {import("express").Response} Express.Response
 */

//  #
//  #
//  #       ###    ## #
//  #      #   #  #  #
//  #      #   #   ##
//  #      #   #  #
//  #####   ###    ###
//                #   #
//                 ###
/**
 * A class that represents the log page.
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
        const log = await LogModel.getById(+req.params.id);

        res.status(200).send(Common.page(
            /* html */`
                <link rel="stylesheet" href="/css/home.css" />
                <script src="/views/home/log.js"></script>
                <script src="/views/home/logs.js"></script>
                <script src="/js/log.js"></script>
            `,
            LogView.get({logs: log}),
            req
        ));
    }
}

Home.route = {
    path: "/log/:id",
    requiresAuthorization: true
};

module.exports = Home;
