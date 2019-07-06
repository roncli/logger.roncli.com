//  #                      #
//  #
//  #       ###    ## #   ##    # ##
//  #      #   #  #  #     #    ##  #
//  #      #   #   ##      #    #   #
//  #      #   #  #        #    #   #
//  #####   ###    ###    ###   #   #
//                #   #
//                 ###
/**
 * A class that handles the login page.
 */
class Login {
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
        document.getElementsByName("username")[0].focus();
    }
}

document.addEventListener("DOMContentLoaded", Login.DOMContentLoaded);
