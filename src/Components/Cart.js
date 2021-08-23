import React, { Component } from "react";
import CartItems from "./CartItems";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <CartItems />
        <CartItems />
        <CartItems />
      </div>
    );
  }
}
