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

    //          #     #
    //          #     #
    //  ###   ###   ###
    // #  #  #  #  #  #
    // # ##  #  #  #  #
    //  # #   ###   ###
    /**
     * Adds a log.
     * @param {string} application The application the log is from.
     * @param {string} category The category of the log.
     * @param {string} message The log message.
     * @param {Date} date The date of the log.
     * @returns {Promise<number>} A promise that resolves with the ID number of the new log.
     */
    static async add(application, category, message, date) {
        try {
            return await Db.add(application, category, message, date);
        } catch (err) {
            err.message = `There was a database error adding a log. - ${err.message}`;
            throw err;
        }
    }

    //    #        ##           #
    //    #         #           #
    //  ###   ##    #     ##   ###    ##
    // #  #  # ##   #    # ##   #    # ##
    // #  #  ##     #    ##     #    ##
    //  ###   ##   ###    ##     ##   ##
    /**
     * Deletes a log by its ID.
     * @param {number} id The ID of the log to delete.
     * @returns {Promise} A promise that resolves when the log entry is deleted.
     */
    static async delete(id) {
        try {
            await Db.deleteById(id);
        } catch (err) {
            err.message = `There was a database error deleting a log. - ${err.message}`;
            throw err;
        }
    }

    //              #    ###         ###      #
    //              #    #  #         #       #
    //  ###   ##   ###   ###   #  #   #     ###
    // #  #  # ##   #    #  #  #  #   #    #  #
    //  ##   ##     #    #  #   # #   #    #  #
    // #      ##     ##  ###     #   ###    ###
    //  ###                     #
    /**
     * Gets a log by its ID.
     * @param {number} id The ID of the log.
     * @returns {Promise<Log[]>} A promise that resolves with the log.
     */
    static async getById(id) {
        try {
            return (await Db.getById(id)).map((log) => new Log(log));
        } catch (err) {
            err.message = `There was a database error getting a log. - ${err.message}`;
            throw err;
        }
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
            err.message = `There was a database error getting the recent logs. - ${err.message}`;
            throw err;
        }
    }
}

module.exports = Log;
