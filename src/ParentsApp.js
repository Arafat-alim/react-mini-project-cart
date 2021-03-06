import React, { Component } from "react";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
class ParentsApp extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          title: "Apple",
          price: 999,
          qty: 0,
          imgSrc:
            "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
        },
        {
          id: 2,
          title: "Watch",
          price: 99,
          qty: 10,
          imgSrc:
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKUU3_VW_34FR+watch-44-alum-gold-nc-se_VW_34FR_WF_CO_GEO_IN?wid=750&hei=712&trim=1,0&fmt=p-jpg&qlt=95&.v=1632171096000,1630708161000",
        },
        {
          id: 3,
          title: "Laptop",
          price: 1999,
          qty: 5,
          imgSrc:
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        },
      ],
    };
    // this.handleIncrease = this.handleIncrease.bind(this);
    // this.testing();
  }
  increaseHandler = (item) => {
    console.log("hey Please increase the quantity", item);
    const { products } = this.state;
    // find the index we got from the children
    const index = products.indexOf(item);
    // updating the product qty value
    products[index].qty += 1; //updated qty

    this.setState({
      products,
    });
  };

  decreaseHandler = (item) => {
    console.log("Hey please decrease the quantity of item", item);
    const { products } = this.state;
    //! finding the item index first
    const index = products.indexOf(item);
    //! checking if the quantity is zero or not
    if (!products[index].qty) {
      return;
    }
    //! If qty is not zero, then updating the product qty value
    products[index].qty -= 1;
    //! updated the product using setState

    this.setState({
      products,
    });
  };

  deleteHandler = (id) => {
    console.log("Hey please the item from the list", id);
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id); //new array with deleted items

    // updated the list
    this.setState({
      products: items,
    });
  };
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((item) => {
      count += item.qty;
    });
    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((item) => {
      cartTotal = cartTotal + item.qty * item.price;
    });
    return cartTotal;
  };
  render() {
    const { products } = this.state;
    return (
      <div>
        <Navbar count={this.getCartCount()} />
        <Cart
          onIncreaseHandle={this.increaseHandler}
          onDecreaseHandle={this.decreaseHandler}
          onDelete={this.deleteHandler}
          products={products}
        />
        <div style={{ fontSize: 25, padding: 20 }}>
          TOTAL : ${this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default ParentsApp;
