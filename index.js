const compression = require("compression"),
    express = require("express"),
    minify = require("express-minify"),
    morgan = require("morgan"),
    session = require("express-session"),

    Log = require("./src/logging/log"),
    morganExtensions = require("./src/extensions/morgan.extensions"),
    Router = require("./src/router"),
    settings = require("./settings"),

    app = express();

//         #                 #
//         #                 #
//  ###   ###    ###  ###   ###   #  #  ###
// ##      #    #  #  #  #   #    #  #  #  #
//   ##    #    # ##  #      #    #  #  #  #
// ###      ##   # #  #       ##   ###  ###
//                                      #
/**
 * Starts up the application.
 */
(async function startup() {
    Log.log("Starting up...");

    let router;
    try {
        router = await Router.getRouter();
    } catch (err) {
        console.log(err);
        return;
    }

    if (process.platform === "win32") {
        process.title = "logger.roncli.com";
    } else {
        process.stdout.write("\x1b]2;logger.roncli.com\x1b\x5c");
    }

    // Add morgan extensions.
    morganExtensions(morgan);

    // Initialize middleware stack.
    app.set("trust proxy", 1);
    app.use(compression());
    app.use(morgan(":colorstatus \x1b[30m\x1b[0m:method\x1b[0m :url\x1b[30m\x1b[0m:newline    Date :date[iso]    IP :req[ip]    Time :colorresponse ms"));
    app.use(minify());
    app.use(session({
        secret: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        resave: false,
        saveUninitialized: false
    }));
    app.use(express.urlencoded({extended: true}));

    // Web server routes.
    app.use(express.static("public"));

    app.use("/", router);
    app.all("*", (req, res) => {
        req.method = "GET";
        req.url = "/404";
        router(req, res);
    });

    // Startup web server.
    const port = process.env.PORT || settings.express.port;

    app.listen(port);
    console.log(`Web server listening on port ${port}.`);
}());

process.on("unhandledRejection", (reason) => {
    Log.exception("Unhandled promise rejection caught.", reason);
});
