const Joi = require("@hapi/joi");
const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

function validateBook(book) {
  const schema = {
    title: Joi.string().required(),
    author: Joi.string().required()
  };

  return Joi.validate(book, schema);
}

const Book = model("Book", bookSchema);

module.exports = { Book, validateBook };
