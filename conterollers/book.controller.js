const uploadImage = require("../middleware/upload");
const { bookServices } = require("../services")

module.exports.addBook = async (req, res) => {
    try {
        let body = req.body

        let { path, originalname } = req.file;

        let cloud = await uploadImage(path, originalname);

        let newBody = {
            ...body,
            book_images: cloud.url,
        };

        let book = await bookServices.createBook(newBody)
        res.status(201).json({
            message: "BOOK ADDED SUCCESSFULLY",
            book
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}
module.exports.getBook = async (req, res) => {
    try {
        let book = await bookServices.getAllBooks()
        res.status(200).json({
            message: "GET ALL BOOKS SUCCESSFULLY",
            book
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}
module.exports.deleteBook = async (req, res) => {
    try {
        let { id } = req.params
        let book = await bookServices.findByIdAndDelete(id)
        res.status(200).json({
            message: "BOOK DELETED SUCCESSFULLY",
            book
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}
module.exports.updateBook = async (req, res) => {
    try {
        let { id } = req.params
        let body = req.body
        let { path, originalname } = req.file;
        let cloud = await uploadImage(path, originalname);

        let newBody = {
            ...body,
            book_images: cloud.url,
        };

        let updatedBody = {
            id,
            ...newBody
        }
        let book = await bookServices.findByIdAndUpdate(id, body)
        res.status(200).json({
            message: "BOOK UPDATED SUCCESSFULLY",
            updatedBody
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}
module.exports.viewBook = async (req, res) => {
    try {
        let { id } = req.params
        let book = await bookServices.findById(id)
        res.status(200).json({
            message: "VIEW SELECTED BOOK SUCCESSFULLY",
            book
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}