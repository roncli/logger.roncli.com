const db = require("./index");

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
