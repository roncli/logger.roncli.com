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
     * @returns {string} An HTML string of the home view.
     */
    static get() {
        return /* html */`
            <div id="home">
                <div class="text">
                    You did it!
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
