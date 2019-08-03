import axios from "axios";
import React from "react";

import Form from "./../components/Form";
import Page from "../components/Page";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const { data: list } = await axios.get("/api/books");

    return { list };
  }

  render() {
    console.log(this.props.list);

    return (
      <Page title="Reading List">
        <section className="container py-5">
          <h1>New Book</h1>
          <Form />
        </section>
      </Page>
    );
  }
}
