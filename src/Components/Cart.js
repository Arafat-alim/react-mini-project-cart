import React, { Component } from "react";
import CartItems from "./CartItems";

export default class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <CartItems />
        <CartItems />
        <CartItems />
      </div>
    );
  }
}
