import React, { Component } from "react";

export class CartItem extends Component {
  render() {
    return (
      <div>
        <div className="cart-item">
          <div className="right-block">
            <img alt="product-img" />
          </div>
          <div className="left-block">
            <div>Phone</div>
            <div>Rs. 999</div>
            <div>Qnty: 9</div>
            <div className="cart-item-actions">{/* Buttons */}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
