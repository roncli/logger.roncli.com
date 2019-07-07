const Log = require("../../src/models/log");

/**
 * @typedef {import("express").Request} Express.Request
 * @typedef {import("express").Response} Express.Response
 */

//   ###           #       #             #
//  #   #          #      # #
//  #       ###   ####   #   #  # ##    ##
//  #      #   #   #     #   #  ##  #    #
//  #  ##  #####   #     #####  ##  #    #
//  #   #  #       #  #  #   #  # ##     #
//   ###    ###     ##   #   #  #       ###
//                              #
//                              #
/**
 * A class that represents the Match API.
 */
class GetApi {
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
     * @returns {Promise} A promise that resolves when the request is complete.
     */
    static async get(req, res) {
        return res.json({logs: await Log.getOldest100()});
    }
}

GetApi.route = {
    path: "/api/get"
};

module.exports = GetApi;
