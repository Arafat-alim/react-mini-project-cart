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
        },
        {
          id: 2,
          title: "Watch",
          price: 999,
          qty: 1,
        },
        {
          id: 3,
          title: "Sapphire Pen",
          price: 99,
          qty: 5,
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
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar />
        <Cart
          products={products}
          handleIncrease={this.increaseQuantity}
          handleDecrease={this.decreaseQuantity}
          handleDelete={this.deleteQuantity}
        />
      </div>
    );
  }
}

export default App;
