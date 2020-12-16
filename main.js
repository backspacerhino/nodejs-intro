const http = require("http");
const route = require("./Core/Route/Route")

require("./start/routes")

http.createServer((request, response) => {
    const Route = route.getInstance()
    const url = request.url.substring(1)
    const result = Route.resolve(request.method, url)
    response.end(result)

}).listen(3001)
