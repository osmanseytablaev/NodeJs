const express = require("express");
const favicon = require("serve-favicon");
const app = express();
const staticAssets = __dirname + "/public/js";
const faviconPath = __dirname + "/public/js/favicon.ico";

app
    .use(express.static(staticAssets))
    .use(favicon(faviconPath))
    .get("/api/profile", (req, res) => {
        const profile = {name: "Osman"};
        res.send(profile);
    })
;

app.listen(3050);