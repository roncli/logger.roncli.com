/**
 * @typedef {import("../../../src/models/log")} Log
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
 * A class that represents the log view for the home page.
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
     * Gets the log template.
     * @param {Log} log The log.
     * @returns {string} An HTML string of the log.
     */
    static get(log) {
        return /* html */`
            <div class="id">
                ${log.id}<br />
                <button class="delete" data-id="${log.id}">Delete</button>
            </div>
            <div>${log.application}</div>
            <div>${log.category}</div>
            <div class="message"><pre>${LogView.Common.htmlEncode(log.message)}</pre></div>
            <div class="date"><time class="local" datetime="${log.date}"></time></div>
        `;
    }
}

// @ts-ignore
LogView.Common = typeof Common === "undefined" ? require("../../../web/includes/common") : Common; // eslint-disable-line no-undef

if (typeof module !== "undefined") {
    module.exports = LogView; // eslint-disable-line no-undef
}
