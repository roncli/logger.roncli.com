const Db = require("../database/log");

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
 * A class that represents a log entry.
 */
class Log {
    //                           #                       #
    //                           #                       #
    //  ##    ##   ###    ###   ###   ###   #  #   ##   ###    ##   ###
    // #     #  #  #  #  ##      #    #  #  #  #  #      #    #  #  #  #
    // #     #  #  #  #    ##    #    #     #  #  #      #    #  #  #
    //  ##    ##   #  #  ###      ##  #      ###   ##     ##   ##   #
    /**
     * Creates a new instance of a log file with the specified data.
     * @param {{id: number, application: string, category: string, message: string, date: Date}} data The data to create the log instance with.
     */
    constructor(data) {
        this.id = data.id;
        this.application = data.application;
        this.category = data.category;
        this.message = data.message;
        this.date = data.date;
    }

    //              #     ##   ##       #                #     #     #     #
    //              #    #  #   #       #                #    ##    # #   # #
    //  ###   ##   ###   #  #   #     ###   ##    ###   ###    #    # #   # #
    // #  #  # ##   #    #  #   #    #  #  # ##  ##      #     #    # #   # #
    //  ##   ##     #    #  #   #    #  #  ##      ##    #     #    # #   # #
    // #      ##     ##   ##   ###    ###   ##   ###      ##  ###    #     #
    //  ###
    /**
     * Gets all log entries, up to 100.
     * @returns {Promise<Log[]>} The oldest 100 log entries.
     */
    static async getOldest100() {
        try {
            return (await Db.getOldest100()).map((log) => new Log(log));
        } catch (err) {
            err.message = `There was a database error getting the list of allowed maps. - ${err.message}`;
            throw err;
        }
    }
}

module.exports = Log;
