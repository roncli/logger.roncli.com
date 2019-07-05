/**
 * @type {{type: string, date: Date, obj?: object, message?: string}[]}
 */
const queue = [];

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
 * A class that handles logging.
 */
class Log {
    // ##
    //  #
    //  #     ##    ###
    //  #    #  #  #  #
    //  #    #  #   ##
    // ###    ##   #
    //              ###
    /**
     * Logs a message.
     * @param {string} message The message to log.
     * @returns {void}
     */
    static log(message) {
        queue.push({
            type: "log",
            date: new Date(),
            message
        });
        Log.output();
    }

    //                          #
    //
    // #  #   ###  ###   ###   ##    ###    ###
    // #  #  #  #  #  #  #  #   #    #  #  #  #
    // ####  # ##  #     #  #   #    #  #   ##
    // ####   # #  #     #  #  ###   #  #  #
    //                                      ###
    /**
     * Logs a warning.
     * @param {string} message The string to log.
     * @returns {void}
     */
    static warning(message) {
        queue.push({
            type: "warning",
            date: new Date(),
            message
        });
        Log.output();
    }

    //                                #     #
    //                                #
    //  ##   #  #   ##    ##   ###   ###   ##     ##   ###
    // # ##   ##   #     # ##  #  #   #     #    #  #  #  #
    // ##     ##   #     ##    #  #   #     #    #  #  #  #
    //  ##   #  #   ##    ##   ###     ##  ###    ##   #  #
    //                         #
    /**
     * Logs an exception.
     * @param {string} message The message describing the error.
     * @param {object} [obj] The object to log.
     * @returns {void}
     */
    static exception(message, obj) {
        queue.push({
            type: "exception",
            date: new Date(),
            message,
            obj
        });
        Log.output();
    }

    //              #                 #
    //              #                 #
    //  ##   #  #  ###   ###   #  #  ###
    // #  #  #  #   #    #  #  #  #   #
    // #  #  #  #   #    #  #  #  #   #
    //  ##    ###    ##  ###    ###    ##
    //                   #
    /**
     * Outputs the log queue.
     * @returns {void}
     */
    static output() {
        for (const log of queue) {
            console.log(log);
        }

        queue.splice(0, queue.length);
    }
}

module.exports = Log;
