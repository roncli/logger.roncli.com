/**
 * @typedef {import("../../../src/models/log")} Log
 */

//  #                           #   #    #
//  #                           #   #
//  #       ###    ## #   ###   #   #   ##     ###   #   #
//  #      #   #  #  #   #       # #     #    #   #  #   #
//  #      #   #   ##     ###    # #     #    #####  # # #
//  #      #   #  #          #   # #     #    #      # # #
//  #####   ###    ###   ####     #     ###    ###    # #
//                #   #
//                 ###
/**
 * A class that represents the home view.
 */
class LogsView {
    //              #
    //              #
    //  ###   ##   ###
    // #  #  # ##   #
    //  ##   ##     #
    // #      ##     ##
    //  ###
    /**
     * Gets the home view.
     * @param {{logs: Log[]}} data The data with the logs to display.
     * @returns {string} An HTML string of the home view.
     */
    static get(data) {
        return /* html */`
            <div class="header">ID</div>
            <div class="header">Application</div>
            <div class="header">Category</div>
            <div class="header">Message</div>
            <div class="header">Date</div>
            ${data.logs.map((log) => LogsView.LogView.get(log)).join("")}
        `;
    }
}

// @ts-ignore
LogsView.LogView = typeof LogView === "undefined" ? require("./log") : LogView; // eslint-disable-line no-undef

if (typeof module !== "undefined") {
    module.exports = LogsView; // eslint-disable-line no-undef
}
