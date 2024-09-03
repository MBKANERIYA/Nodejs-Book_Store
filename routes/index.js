let express = require("express")
let bookRoute = require("./book.route")

let routes = express.Router()
routes.use("/book", bookRoute)

module.exports = routes