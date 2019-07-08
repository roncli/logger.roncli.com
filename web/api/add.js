const Log = require("../../src/logging/log"),
    LogModel = require("../../src/models/log"),
    settings = require("../../settings");

/**
 * @typedef {import("express").Request} Express.Request
 * @typedef {import("express").Response} Express.Response
 */

//    #        #      #    #             #
//   # #       #      #   # #
//  #   #   ## #   ## #  #   #  # ##    ##
//  #   #  #  ##  #  ##  #   #  ##  #    #
//  #####  #   #  #   #  #####  ##  #    #
//  #   #  #  ##  #  ##  #   #  # ##     #
//  #   #   ## #   ## #  #   #  #       ###
//                              #
//                              #
/**
 * A class that represents the Match API.
 */
class AddApi {
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
        if (req.body.key !== settings.key) {
            res.status(401).send("Unauthorized.");
            return;
        }

        let attempts = 60;

        /**
         * Attempts to handle the post.
         * @returns {Promise<number>} The response.
         */
        const handlePost = async () => {
            const id = await LogModel.add(req.body.application, req.body.category, req.body.message, new Date(req.body.date));
            return id;
        };

        const id = await handlePost();
        if (id) {
            res.json({id, url: `${req.protocol}://${req.get("host")}/log/${id}`});
            return;
        }

        attempts--;
        res.json({id: 0, reason: "Log was received, but there was an error while processing.  Attempts to process this log will continue to be made."});

        setTimeout(async () => {
            while (attempts > 0) {
                try {
                    await handlePost();
                    attempts = 0;
                } catch (err) {
                    attempts--;
                    if (attempts === 0) {
                        Log.exception(`There was an error saving the following log: ${JSON.stringify(req.body)}`, err);
                        return;
                    }
                    await new Promise((resolve) => setTimeout(resolve, 60000));
                }
            }
        }, 60000);
    }
}

AddApi.route = {
    path: "/api/add",
    requiresAuthorization: false
};

module.exports = AddApi;
