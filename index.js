const http = require("http");
const fs = require("fs");
var port = process.argv.slice(2)
port = parseInt(String(port).slice(7))
console.log(port);

let homeData = "";
let projectData = "";
let registrationContent = "";

fs.readFile("home.html", (err, home) => {
    if (err) {
        throw err;
    }
    homeData = home;
});

fs.readFile("project.html", (err, project) => {
    if (err) {
        throw err;
    }
    projectData = project;
});
fs.readFile("registration.html", (err, registration) => {
    if (err) {
        throw err;
    }
    registrationContent = registration;
});
http
    .createServer((request, response) => {
        let url = request.url;
        response.writeHeader(200, { "Content-Type": "text/html" });
        switch (url) {
            case "/project":
                response.write(projectData);
                response.end();
                break;
            case "/registration":
                response.write(registrationContent);
                response.end();
                break;
            default:
                response.write(homeData);
                response.end();
                break;
        }
    })
    .listen(port);
