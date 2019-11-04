const express = require('express');
const { Types } = require('mongoose');

const { Book, validateBook } = require('../models/book');

const router = express.Router();

router.get('/', async (req, res) => {
    const books = await Book.find({}).sort({ createdAt: -1 });

    res.send(books);
});

router.post('/', async (req, res) => {
    const { error } = validateBook(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const book = new Book(req.body);
    await book.save();

    res.send(book);
});

router.delete('/:id', async (req, res) => {
    if (!Types.ObjectId.isValid(req.params.id))
        return res.status(404).send('Book not found.');

    const book = await Book.findOneAndDelete({ _id: req.params.id });
    if (!book) return res.status(404).send('Book not found.');

    res.send(book);
});

module.exports = router;
