import React from "react";

import TableBody from "./common/TableBody";
import TableHead from "./common/TableHead";

class List extends React.Component {
  state = {};

  columns = [
    { path: "title", label: "Title" },
    { path: "author", label: "Author" },
    {
      key: "delete",
      content: book => (
        <button
          onClick={() => this.props.onDelete(book)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    return (
      <table className="table table-striped mt-4">
        <TableHead columns={this.columns} />
        <TableBody data={this.props.data} columns={this.columns} />
      </table>
    );
  }
}

export default List;
