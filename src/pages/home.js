import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <div className="Home">
            <header className="Home-header" />
          </div>

          <div>
            <Jumbotron>TEST Jumbotron</Jumbotron>
          </div>
        </Row>
      </Container>
    );
  }
}
export default Home;
