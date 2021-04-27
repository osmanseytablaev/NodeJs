const express = require("express");

const app = express();

app
    .use((req, res, next) =>{
       var profile = {name: "Osman"};
       req.profile = profile;
       next();
    })
    .get("/", (req, res) =>{
    res.send(req.profile);
    })


app.listen(3000)