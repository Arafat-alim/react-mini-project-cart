import React, { Component } from "react";

export class CartItem extends Component {
  render() {
    return (
      <div>
        <div className="cart-item">
          <div className="right-block">
            <img style={styles.image} />
          </div>
          <div className="left-block">
            <div style={{ fontSize: "25px" }}>Phone</div>
            <div style={{ color: "#ddd" }}>Rs. 999</div>
            <div style={{ color: "#ddd" }}>Qnty: 9</div>
            <div className="cart-item-actions">{/* Buttons */}</div>
          </div>
        </div>
      </div>
    );
  }
}
// styling my component
const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "black",
  },
};

export default CartItem;
