const { bookSchema } = require("../models")

module.exports.createBook = (body) => {
    return bookSchema.create(body)
}
module.exports.getAllBooks = () => {
    return bookSchema.find()
}
module.exports.findByIdAndDelete = (id) => {
    return bookSchema.findByIdAndDelete(id)
}
module.exports.findByIdAndUpdate = (id, body) => {
    return bookSchema.findByIdAndUpdate(id, body)
}
module.exports.findById = (id) => {
    return bookSchema.findById(id)
}