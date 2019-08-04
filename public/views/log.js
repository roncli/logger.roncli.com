/**
 * @typedef {import("../../src/models/log")} Log
 */

//  #                    #   #    #
//  #                    #   #
//  #       ###    ## #  #   #   ##     ###   #   #
//  #      #   #  #  #    # #     #    #   #  #   #
//  #      #   #   ##     # #     #    #####  # # #
//  #      #   #  #       # #     #    #      # # #
//  #####   ###    ###     #     ###    ###    # #
//                #   #
//                 ###
/**
 * A class that represents the log view.
 */
class LogView {
    //              #
    //              #
    //  ###   ##   ###
    // #  #  # ##   #
    //  ##   ##     #
    // #      ##     ##
    //  ###
    /**
     * Gets the log view.
     * @param {{logs: Log[]}} data The data with the logs to display.
     * @returns {string} An HTML string of the log view.
     */
    static get(data) {
        return /* html */`
            <div id="log">
                <div id="commands">
                    <a href="/">Home</a>
                </div>
                <div id="logs">
                    ${LogView.LogsView.get(data)}
                </div>
            </div>
        `;
    }
}

// @ts-ignore
LogView.Common = typeof Common === "undefined" ? require("../../web/includes/common") : Common; // eslint-disable-line no-undef
// @ts-ignore
LogView.LogsView = typeof LogsView === "undefined" ? require("./home/logs") : LogsView; // eslint-disable-line no-undef

if (typeof module !== "undefined") {
    module.exports = LogView; // eslint-disable-line no-undef
}
