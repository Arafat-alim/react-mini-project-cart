import React from "react";

class CartItems extends React.Component {
  render() {
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>Phone</div>
          <div style={{ color: "#777" }}>Rs. 999</div>
          <div style={{ color: "#777" }}>Qnty: 1</div>
          <div className="cart-item-actions">{/* buttons */}</div>
        </div>
      </div>
    );
  }
}

const styles = {
  height: 110,
  width: 110,
  borderRadius: 4,
  backgroundColor: "#777",
};
export default CartItems;
