const route = require("../Core/Route/Route")

const Route = route.getInstance()

Route.get("orders", function () {
    return [{
        id: 5,
        name: "dildo"
    }, {
        id: 101,
        name: "caj"
    }
    ]
})

Route.post("renato", function () {
    return "+ katarina"
})