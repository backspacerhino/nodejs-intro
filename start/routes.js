const route = require("../Core/Route/Route")

const Route = route.getInstance()

Route.get("orders", "OrdersController.index")
Route.post("orders/:id", "OrdersController.store")
Route.patch("orders:/id", "OrdersController.update")
Route.delete("orders/:id", "OrdersController.delete")