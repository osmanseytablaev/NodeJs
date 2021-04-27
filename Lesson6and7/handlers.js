exports.homepage = function(request, response) {
    response.setHeader("Content-Type", "text/html");
    response.end("<h1>Hello World</h1>")
}

exports.profile = function(request, response) {
    var profile = {
        name: "Will",
        age: 35,
    };
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(profile))
}

exports.error = function(request, response) {
    response.statuscode = 404;
    response.setHeader("Content-Type", "text/html");
    response.end("<h1>Error 404</h1>")
}