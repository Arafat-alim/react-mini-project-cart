import React, { Component } from "react";

export class CartItem extends Component {
  handleIncrease = () => {
    // setState form 1
    this.setState(
      {
        qty: this.state.qty + 1,
      },
      () => {
        console.log("this.state", this.state);
      }
    );
  };

  handleDecrease = () => {
    let { qty } = this.state;
    if (!qty) {
      return;
    }
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };
  render() {
    console.log("render");
    console.log(this.props, this.props);
    const { title, price, qty, imgSrc } = this.props.item;
    return (
      <div>
        <div className="cart-item">
          <div className="right-block">
            <img style={styles.image} src={imgSrc} />
          </div>
          <div className="left-block">
            <div style={{ fontSize: "25px" }}>{title}</div>
            <div style={{ color: "#aaa" }}>Price: ${price}</div>
            <div style={{ color: "#aaa" }}>Qnty: {qty}</div>
            <div className="cart-item-actions">
              <img
                src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1636735192~hmac=42956a57b90a890914cc723ae6fa2fe5"
                alt="increase"
                className="action-icons"
                //! child to parent data passing
                onClick={() => this.props.onIncreaseHandle(this.props.item)}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                alt="decrease"
                className="action-icons"
                onClick={() => this.props.onDecreaseHandle(this.props.item)}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                alt="delete"
                className="action-icons"
              />
            </div>
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
