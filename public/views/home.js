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
     * @param {Log[]} logs The logs to display.
     * @returns {string} An HTML string of the home view.
     */
    static get(logs) {
        return /* html */`
            <div id="home">
                <div id="logs">
                    <div class="header">ID</div>
                    <div class="header">Application</div>
                    <div class="header">Category</div>
                    <div class="header">Message</div>
                    <div class="header">Date</div>
                    ${logs.map((log) => /* html */`
                        <div class="id">${log.id}</div>
                        <div>${log.application}</div>
                        <div>${log.category}</div>
                        <div class="message"><pre>${log.message}</pre></div>
                        <div class="date"><script>document.write(Common.formatDate(new Date("${log.date}")));</script></div>
                    `).join("")}
                </div>
            </div>
        `;
    }
}

// @ts-ignore
HomeView.Common = typeof Common === "undefined" ? require("../../web/includes/common") : Common; // eslint-disable-line no-undef

if (typeof module !== "undefined") {
    module.exports = HomeView; // eslint-disable-line no-undef
}
