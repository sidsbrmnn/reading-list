import React, { Component } from "react";

class Form extends Component {
  state = { data: { author: "", title: "" } };

  handleDisabled = () => {
    const data = this.state.data;

    if (data.author && data.title) return false;

    return true;
  };

  handleChange = e => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;

    this.setState({ data });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const book = this.state.data;

    const error = await this.props.onSubmit(book);
    if (!error) this.setState({ data: { author: "", title: "" } });
  };

  render() {
    const { title, author } = this.state.data;

    return (
      <form className="row mt-4" onSubmit={this.handleSubmit}>
        <div className="col-md-6 col-12 mb-md-0 mb-4">
          <input
            className="form-control"
            id="title"
            name="title"
            onChange={this.handleChange}
            placeholder="Title"
            value={title}
          />
        </div>
        <div className="col-md-4 col-9">
          <input
            className="form-control"
            id="author"
            name="author"
            onChange={this.handleChange}
            placeholder="Author"
            value={author}
          />
        </div>
        <div className="col-md-2 col-3">
          <button
            type="submit"
            className="w-100 btn btn-primary"
            disabled={this.handleDisabled()}
          >
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
