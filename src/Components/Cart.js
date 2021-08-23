import React, { Component } from "react";
import CartItems from "./CartItems";

export default class Cart extends Component {
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
    let { products } = this.state;
    return (
      <div className="cart">
        {/* <CartItems qty={100} title={"Mobile"} img={""} /> */}

        {products.map((product) => {
          return (
            <CartItems
              key={product.id}
              product={product}
              handleIncrease={this.increaseQuantity}
              handleDecrease={this.decreaseQuantity}
              handleDelete={this.deleteQuantity}
              //   func={() => { can pass a function
              //     console.log("hello");
              //   }}
              //   isBool={true} can pass bool
              //   jsx={<h1>{"hello Miya"}</h1>} // can pass a jsx
            />
          );
        })}
        <h1>{"Hell"}</h1>
      </div>
    );
  }
}
