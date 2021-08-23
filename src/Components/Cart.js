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
