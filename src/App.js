import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/wrapper/wrapper";
import Navbar from "./components/navbar/navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <nav className="navbar">
              <ul>
                <li className="title">Streaming App</li>

                <li className="create-account">
                  Create Account {this.createAccount} | Login {this.login}
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
