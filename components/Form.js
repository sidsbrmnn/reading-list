import axios from "axios";
import React, { Component } from "react";

axios.defaults.baseURL = "http://localhost:3000";

class Form extends Component {
  state = { data: { author: "", title: "" }, error: "" };

  displayError = () => {
    const error = this.state.error;
    if (error)
      return (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      );
  };

  handleDisabled = () => {
    const data = this.state.data;

    if (data.author && data.title) return false;

    return true;
  };

  handleChange = ({ currentTarget }) => {
    const data = { ...this.state.data };
    data[currentTarget.name] = currentTarget.value;

    this.setState({ data });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const payload = this.state.data;

    try {
      await axios.post("/api/books", payload);
      this.setState({ data: { author: "", title: "" } });
    } catch ({ response: res }) {
      if (res.status !== 200) this.setState({ error: res.data });
    }
  };

  render() {
    const { title, author } = this.state.data;

    return (
      <React.Fragment>
        <form className="row mt-4" onSubmit={this.handleSubmit}>
          <div className="col-7">
            <input
              className="form-control"
              id="title"
              name="title"
              onChange={this.handleChange}
              placeholder="Title"
              value={title}
            />
          </div>
          <div className="col-4">
            <input
              className="form-control"
              id="author"
              name="author"
              onChange={this.handleChange}
              placeholder="Author"
              value={author}
            />
          </div>
          <div className="col">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={this.handleDisabled()}
            >
              Add
            </button>
          </div>
        </form>
        {this.displayError()}
      </React.Fragment>
    );
  }
}

export default Form;
