let joi = require("joi")

let book = {
    body:joi.object().keys({
        book_name: joi.string().required().trim(),
        book_price: joi.string().required().trim(),
        book_pages: joi.string().required().trim(),
        book_auther: joi.string().required().trim(),
        book_images: joi.string().optional().trim()
    })
}
module.exports = book