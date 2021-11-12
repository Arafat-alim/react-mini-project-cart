import React, { Component } from "react";
import Cart from "./Cart";
import Navbar from "./Components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Cart />
      </div>
    );
  }
}

export default App;
