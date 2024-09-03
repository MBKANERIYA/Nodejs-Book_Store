let mongoose = require("mongoose")

let bookSchema = new mongoose.Schema({
    book_name: {},
    book_price: {},
    book_pages: {},
    book_auther: {},
    book_images: {}
})

let book = mongoose.model("bookSchema", bookSchema)
module.exports = book