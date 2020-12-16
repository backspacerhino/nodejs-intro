const http = require("http");
const route = require("./Core/Route/Route")

require("./start/routes")

http.createServer(async (request, response) => {
    const Route = route.getInstance()
    const url = request.url.substring(1)

    const result = await Route.resolve(request.method, url)
    response.setHeader("content-type", "application/json")
    response.end(JSON.stringify(result))

}).listen(3001)
