const http = require("http");
const route = require("./Core/Route/Route")

require("./start/routes")

http.createServer((request, response) => {
    const Route = route.getInstance()
    const url = request.url.substring(1)
    const result = Route.resolve(request.method, url)
    console.log(result);
    response.setHeader("content-type", "application/json")
    response.end(JSON.stringify(result))

}).listen(3001)
