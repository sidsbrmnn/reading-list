import React, { Component } from "react";

import BookList from "../components/BookList";
import NewBook from "../components/NewBook";
import Page from "../components/Page";
import { addBook, getBooks, deleteBook } from "../utils/books";

export default class extends Component {
  state = { books: [], error: "" };

  componentDidMount() {
    this.updateBooks();
  }

  displayError = () => {
    const error = this.state.error;
    if (error)
      return (
        <div className="alert alert-danger mb-0" role="alert">
          {error}
        </div>
      );
  };

  updateBooks = async () => {
    const books = await getBooks();
    this.setState({ books });
  };

  doSubmit = async book => {
    const error = await addBook(book);
    if (error) {
      this.setState({ error });
      return error;
    }

    this.updateBooks();
  };

  handleDelete = async book => {
    const error = await deleteBook(book._id);
    if (error) return this.setState({ error });
    this.updateBooks();
  };

  render() {
    return (
      <Page title="Reading List">
        <section className="container py-5">
          <h1>New Book</h1>
          <NewBook onSubmit={this.doSubmit} />
        </section>
        <section>
          <div className="col-lg-4 col-md-6 col-sm-8 col-10 mx-auto">
            {this.displayError()}
          </div>
        </section>
        <section className="container py-5">
          <h1>Book List</h1>
          <BookList data={this.state.books} onDelete={this.handleDelete} />
        </section>
      </Page>
    );
  }
}
