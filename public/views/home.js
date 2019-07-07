/**
 * @typedef {import("../../src/models/log")} Log
 */

//  #   #                       #   #    #
//  #   #                       #   #
//  #   #   ###   ## #    ###   #   #   ##     ###   #   #
//  #####  #   #  # # #  #   #   # #     #    #   #  #   #
//  #   #  #   #  # # #  #####   # #     #    #####  # # #
//  #   #  #   #  # # #  #       # #     #    #      # # #
//  #   #   ###   #   #   ###     #     ###    ###    # #
/**
 * A class that represents the home view.
 */
class HomeView {
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
            <div id="home">
                <div id="commands">
                    <button id="refresh">Refresh</button>
                </div>
                <div id="logs">
                    ${HomeView.LogsView.get(data)}
                </div>
            </div>
        `;
    }
}

// @ts-ignore
HomeView.Common = typeof Common === "undefined" ? require("../../web/includes/common") : Common; // eslint-disable-line no-undef
// @ts-ignore
HomeView.LogsView = typeof LogsView === "undefined" ? require("./home/logs") : LogsView; // eslint-disable-line no-undef

if (typeof module !== "undefined") {
    module.exports = HomeView; // eslint-disable-line no-undef
}
