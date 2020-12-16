const route = require("../Core/Route/Route")

const Route = route.getInstance()

Route.register("GET", "bla", function(){
    return "ej ti"
})

Route.register("GET", "renato", function () {
    return "+ katarina"
})