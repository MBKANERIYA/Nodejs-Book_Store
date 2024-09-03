let express = require("express")
const validate = require("../middleware/validation")
const { bookValidation } = require("../validation.js")
const { bookController } = require("../conterollers/index.js")
const upload = require("../middleware/multer.js")

let route = express.Router()

route.get("/get", bookController.getBook)
route.post("/create", upload.single("book_images"), validate(bookValidation), bookController.addBook)
route.delete("/delete/:id", bookController.deleteBook)
route.put("/update/:id", upload.single("book_images"), validate(bookValidation), bookController.updateBook)
route.get("/get/:id", bookController.viewBook)

module.exports = route