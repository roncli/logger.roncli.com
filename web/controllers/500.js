/**
 * @typedef {import("express").Request} Express.Request
 * @typedef {import("express").Response} Express.Response
 */

//   ###                                      #####
//  #   #                                     #
//  #       ###   # ##   #   #   ###   # ##   #      # ##   # ##    ###   # ##
//   ###   #   #  ##  #  #   #  #   #  ##  #  ####   ##  #  ##  #  #   #  ##  #
//      #  #####  #       # #   #####  #      #      #      #      #   #  #
//  #   #  #      #       # #   #      #      #      #      #      #   #  #
//   ###    ###   #        #     ###   #      #####  #      #       ###   #
/**
 * A class that represents the 500 page.
 */
class ServerError {
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
        res.status(500).send("Server error.");
    }
}

ServerError.route = {};

module.exports = ServerError;
