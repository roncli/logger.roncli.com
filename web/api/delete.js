const Log = require("../../src/models/log");

/**
 * @typedef {import("express").Request} Express.Request
 * @typedef {import("express").Response} Express.Response
 */

//  ####           ##            #              #             #
//   #  #           #            #             # #
//   #  #   ###     #     ###   ####    ###   #   #  # ##    ##
//   #  #  #   #    #    #   #   #     #   #  #   #  ##  #    #
//   #  #  #####    #    #####   #     #####  #####  ##  #    #
//   #  #  #        #    #       #  #  #      #   #  # ##     #
//  ####    ###    ###    ###     ##    ###   #   #  #       ###
//                                                   #
//                                                   #
/**
 * A class that represents the Match API.
 */
class DeleteApi {
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
     * @returns {Promise} A promise that resolves when the request is complete.
     */
    static async post(req, res) {
        await Log.delete(+req.body.id);
        return res.json({logs: await Log.getOldest100()});
    }
}

DeleteApi.route = {
    path: "/api/delete"
};

module.exports = DeleteApi;
