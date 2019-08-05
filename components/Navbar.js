import Link from "next/link";
import React, { Component } from "react";

class Navbar extends Component {
  state = {};

  nav = [];

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link href="/">
          <a className="navbar-brand">{this.props.brand}</a>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
