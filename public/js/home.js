/* globals Common, LogsView */

//  #   #
//  #   #
//  #   #   ###   ## #    ###
//  #####  #   #  # # #  #   #
//  #   #  #   #  # # #  #####
//  #   #  #   #  # # #  #
//  #   #   ###   #   #   ###
/**
 * A class that handles the home page.
 */
class Home {
    //  ##   ###   ###    ##   ###
    // # ##  #  #  #  #  #  #  #  #
    // ##    #     #     #  #  #
    //  ##   #     #      ##   #
    /**
     * Displays an error message.
     * @param {string} message The error message.
     * @returns {void}
     */
    static error(message) {
        alert(message);
    }

    //              #
    //              #
    //  ###   ##   ###
    // #  #  # ##   #
    //  ##   ##     #
    // #      ##     ##
    //  ###
    /**
     * Gets data from an api and then reloads the page.
     * @param {string} url The URL to get.
     * @returns {void}
     */
    static get(url) {
        Common.loadDataIntoTemplate(url, void 0, "#logs", LogsView.get).then(() => {
            Home.parseTime();
        });
    }

    //                                ###    #
    //                                 #
    // ###    ###  ###    ###    ##    #    ##    # #    ##
    // #  #  #  #  #  #  ##     # ##   #     #    ####  # ##
    // #  #  # ##  #       ##   ##     #     #    #  #  ##
    // ###    # #  #     ###     ##    #    ###   #  #   ##
    // #
    /**
     * Parses time elements to display the local time.
     * @returns {void}
     */
    static parseTime() {
        for (const time of document.getElementsByClassName("local")) {
            time.innerText = Common.formatDate(new Date(time.dateTime));
        }
    }

    //                     #
    //                     #
    // ###    ##    ###   ###
    // #  #  #  #  ##      #
    // #  #  #  #    ##    #
    // ###    ##   ###      ##
    // #
    /**
     * Posts to the api and then reloads the page.
     * @param {string} url The URL to post to.
     * @param {object} data The data to send with the post.
     * @returns {void}
     */
    static post(url, data) {
        Common.loadDataIntoTemplate(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }, "#logs", LogsView.get).then(() => {
            Home.parseTime();
        });
    }

    // ###    ##   #  #   ##                #                 #    #                    #           #
    // #  #  #  #  ####  #  #               #                 #    #                    #           #
    // #  #  #  #  ####  #      ##   ###   ###    ##   ###   ###   #      ##    ###   ###   ##    ###
    // #  #  #  #  #  #  #     #  #  #  #   #    # ##  #  #   #    #     #  #  #  #  #  #  # ##  #  #
    // #  #  #  #  #  #  #  #  #  #  #  #   #    ##    #  #   #    #     #  #  # ##  #  #  ##    #  #
    // ###    ##   #  #   ##    ##   #  #    ##   ##   #  #    ##  ####   ##    # #   ###   ##    ###
    /**
     * Sets up the page's key binds.
     * @returns {void}
     */
    static DOMContentLoaded() {
        document.body.addEventListener("click", (ev) => {
            if (ev.target.classList.contains("delete")) {
                Home.post("/api/delete", {id: ev.target.dataset.id});
            }
        });

        document.getElementById("refresh").addEventListener("click", () => {
            Home.get("/api/get");
        });

        Home.parseTime();
    }
}

document.addEventListener("DOMContentLoaded", Home.DOMContentLoaded);
