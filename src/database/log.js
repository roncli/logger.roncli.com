const Db = require("node-database"),
    db = require("./index");

//  #                    ####   #
//  #                     #  #  #
//  #       ###    ## #   #  #  # ##
//  #      #   #  #  #    #  #  ##  #
//  #      #   #   ##     #  #  #   #
//  #      #   #  #       #  #  ##  #
//  #####   ###    ###   ####   # ##
//                #   #
//                 ###
/**
 * A class that handles calls to the database for logs.
 */
class LogDb {
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
        /**
         * @type {{recordsets: [{LogID: number}[]]}}
         */
        const data = await db.query(/* sql */`
            INSERT INTO tblLog (Application, Category, Message, CrDate) VALUES (@application, @category, @message, @date)

            SELECT SCOPE_IDENTITY() LogID
        `, {
            application: {type: Db.VARCHAR(255), value: application},
            category: {type: Db.VARCHAR(255), value: category},
            message: {type: Db.VARCHAR(8001), value: message},
            date: {type: Db.DATETIME, value: date}
        });
        return data && data.recordsets && data.recordsets[0] && data.recordsets[0][0] && data.recordsets[0][0].LogID || void 0;
    }

    //    #        ##           #          ###         ###      #
    //    #         #           #          #  #         #       #
    //  ###   ##    #     ##   ###    ##   ###   #  #   #     ###
    // #  #  # ##   #    # ##   #    # ##  #  #  #  #   #    #  #
    // #  #  ##     #    ##     #    ##    #  #   # #   #    #  #
    //  ###   ##   ###    ##     ##   ##   ###     #   ###    ###
    //                                            #
    /**
     * Deletes a log entry by its ID.
     * @param {number} id The ID of the log entry to delete.
     * @returns {Promise} A promise that resolves when the log entry has been deleted.
     */
    static async deleteById(id) {
        await db.query(/* sql */`
            DELETE FROM tblLog WHERE LogID = @id
        `, {id: {type: Db.INT, value: id}});
    }

    //              #     ##   ##       #                #     #     #     #
    //              #    #  #   #       #                #    ##    # #   # #
    //  ###   ##   ###   #  #   #     ###   ##    ###   ###    #    # #   # #
    // #  #  # ##   #    #  #   #    #  #  # ##  ##      #     #    # #   # #
    //  ##   ##     #    #  #   #    #  #  ##      ##    #     #    # #   # #
    // #      ##     ##   ##   ###    ###   ##   ###      ##  ###    #     #
    //  ###
    /**
     * Gets the oldest 100 log entries.
     * @returns {Promise<{id: number, application: string, category: string, message: string, date: Date}[]>} A promise that resolves with the oldest 100 log entries.
     */
    static async getOldest100() {
        /**
         * @type {{recordsets: [{LogID: number, Application: string, Category: string, Message: string, CrDate: Date}[]]}}
         */
        const data = await db.query(/* sql */`
            SELECT TOP 100 LogID, Application, Category, Message, CrDate FROM tblLog ORDER BY CrDate
        `);
        return data && data.recordsets && data.recordsets[0] && data.recordsets[0].map((row) => ({
            id: row.LogID,
            application: row.Application,
            category: row.Category,
            message: row.Message,
            date: row.CrDate
        })) || [];
    }
}

module.exports = LogDb;
