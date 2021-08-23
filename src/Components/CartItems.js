import React from "react";

class CartItems extends React.Component {
  // deffining the state here
  constructor() {
    super();
    this.state = {
      title: "Mobile Phone",
      price: 999,
      qty: 1,
      img: "",
    };
  }

  render() {
    //   destructuring
    const { title, price, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs. {price}</div>
          <div style={{ color: "#777" }}>Qnty: {qty}</div>
          <div className="cart-item-actions">
            {/* buttons */}
            <img
              className="action-icons"
              src="https://image.flaticon.com/icons/png/512/1828/1828919.png"
              alt="increase"
            />
            <img
              className="action-icons"
              src="https://image.flaticon.com/icons/png/512/992/992683.png"
              alt="decrease"
            />
            <img
              className="action-icons"
              src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
              alt="Delete"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "#777",
  },
};
export default CartItems;
