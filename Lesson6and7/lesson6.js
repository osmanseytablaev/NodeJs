import http from "http";
import { homepage, notFound } from "./handlers";
const server = http.createServer(function(request, response) {
   homepage(request, response)
});
server.listen(3000);