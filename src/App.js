import React, { Component } from "react";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 1,
          title: "Mobile",
          price: 5999,
          qty: 12,
          img: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 2,
          title: "Watch",
          price: 999,
          qty: 1,
          img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=340&q=80",
        },
        {
          id: 3,
          title: "Sapphire Pen",
          price: 99,
          qty: 5,
          img: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80",
        },
      ],
    };
  }

  increaseQuantity = (product) => {
    console.log("Product", product);
    const { products } = this.state;
    const idx = products.indexOf(product);
    products[idx].qty += 1;
    this.setState({
      product,
    });
  };

  decreaseQuantity = (product) => {
    console.log("Products", product);
    const { products } = this.state;
    const idx = products.indexOf(product);
    if (products[idx].qty === 0) {
      return;
    }
    products[idx].qty -= 1;
    this.setState({
      product,
    });
  };

  deleteQuantity = (id) => {
    //come from the child
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };

  getCartcount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });

    return cartTotal;
  };
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartcount()} />
        <Cart
          products={products}
          handleIncrease={this.increaseQuantity}
          handleDecrease={this.decreaseQuantity}
          handleDelete={this.deleteQuantity}
        />
        <div style={{ fontSize: 20, padding: 10 }}>
          TOTAL: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
