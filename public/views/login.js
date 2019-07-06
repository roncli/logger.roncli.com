//  #                      #           #   #    #
//  #                                  #   #
//  #       ###    ## #   ##    # ##   #   #   ##     ###   #   #
//  #      #   #  #  #     #    ##  #   # #     #    #   #  #   #
//  #      #   #   ##      #    #   #   # #     #    #####  # # #
//  #      #   #  #        #    #   #   # #     #    #      # # #
//  #####   ###    ###    ###   #   #    #     ###    ###    # #
//                #   #
//                 ###
/**
 * A class that represents the login view.
 */
class LoginView {
    //              #
    //              #
    //  ###   ##   ###
    // #  #  # ##   #
    //  ##   ##     #
    // #      ##     ##
    //  ###
    /**
     * Gets the login view.
     * @param {string} ret The URL to return to.
     * @param {boolean} [failed] Whether the previous login attempt failed.
     * @returns {string} An HTML string of the login view.
     */
    static get(ret, failed) {
        return /* html */`
            <div id="login">
                <div class="section">Login</div>
                <div class="text">
                    You must login to view this site.
                </div>
                ${failed ? /* html */`
                    <div class="error">
                        Unknown username and password.  Please try again.
                    </div>
                ` : ""}
                <form method="post" action="/login">
                    <input type="hidden" name="return" value="${LoginView.Common.htmlEncode(ret)}">
                    <div class="text">Username:</div>
                    <div><input type="text" name="username" /></div>
                    <div class="text">Password:</div>
                    <div><input type="password" name="password" /></div>
                    <div><input type="submit" value="Login" /></div>
                </form>
            </div>
        `;
    }
}

// @ts-ignore
LoginView.Common = typeof Common === "undefined" ? require("../../web/includes/common") : Common; // eslint-disable-line no-undef

if (typeof module !== "undefined") {
    module.exports = LoginView; // eslint-disable-line no-undef
}
