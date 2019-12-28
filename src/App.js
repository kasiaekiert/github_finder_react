import React, { Component } from "react";
import Users from "./components/users/Users";
import Navbar from "./components/layout/Navbar";
import axios from "axios";
import "./App.css";

class App extends Component {
  componentDidMount() {
    axios
      .get("https://api.github.com/users")
      .then(res => console.log(res.data));
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users />
          <h1>Hello</h1>
        </div>
      </div>
    );
  }
}

export default App;
