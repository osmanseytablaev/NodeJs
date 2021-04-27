const express = require("express");
const app = express();
const staticAssets = __dirname + "/";

app
    .use(express.static(staticAssets))
    .get("/api/profile", (req, res) => {
        var profile = {name: "Osman"}
        res.send(profile)
    })

app.listen(3000);