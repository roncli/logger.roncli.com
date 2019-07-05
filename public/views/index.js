//   ###              #                #   #    #
//    #               #                #   #
//    #    # ##    ## #   ###   #   #  #   #   ##     ###   #   #
//    #    ##  #  #  ##  #   #   # #    # #     #    #   #  #   #
//    #    #   #  #   #  #####    #     # #     #    #####  # # #
//    #    #   #  #  ##  #       # #    # #     #    #      # # #
//   ###   #   #   ## #   ###   #   #    #     ###    ###    # #
/**
 * A class that represents the general website template.
 */
class IndexView {
    //              #
    //              #
    //  ###   ##   ###
    // #  #  # ##   #
    //  ##   ##     #
    // #      ##     ##
    //  ###
    /**
     * Gets the rendered page template.
     * @param {{head: string, html: string, protocol: string, host: string, originalUrl: string, year: number, version: string}} data The data to render the page with.
     * @returns {string} An HTML string of the page.
     */
    static get(data) {
        const {head, html, protocol, host, originalUrl, year, version} = data;

        return /* html */`
            <html>
                <head>
                    <title>logger.roncli.com</title>
                    <meta name="og:title" content="logger.roncli.com" />
                    <meta name="og:type" content="website" />
                    <meta name="og:url" content="${protocol}://${host}${originalUrl}" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:creator" content="@roncli" />
                    <link rel="stylesheet" href="/css/reset.css" />
                    <link rel="stylesheet" href="/css/common.css" />
                    ${head}
                </head>
                <body>
                    <div id="page">
                        <div id="header">
                            <div id="title">logger.roncli.com</div>
                        </div>
                        ${html}
                        <div id="copyright">
                            Version ${version}, &copy;${+year > 2019 ? "2019-" : ""}${year} roncli Productions
                        </div>
                    </div>
                </body>
            </html>
        `;
    }
}

// @ts-ignore
IndexView.Common = typeof Common === "undefined" ? require("../../web/includes/common") : Common; // eslint-disable-line no-undef

if (typeof module !== "undefined") {
    module.exports = IndexView; // eslint-disable-line no-undef
}
