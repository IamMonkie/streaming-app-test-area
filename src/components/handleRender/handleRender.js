import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";

class handleRender extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleRender = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    }

    if (this.state.currentPage === "Log in") {
      return <Login />;
    }

    if (this.state.currentPage === "Create Account") {
      return <create-account />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.handleRender()}
      </div>
    );
  }
}

export default handleRender;
