import React from "react";
import CartItems from "./CartItems";

const Cart = (props) => {
  let { products } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItems
            key={product.id}
            product={product}
            handleIncrease={props.handleIncrease}
            handleDecrease={props.handleDecrease}
            handleDelete={props.handleDelete}
            //   func={() => { can pass a function
            //     console.log("hello");
            //   }}
            //   isBool={true} can pass bool
            //   jsx={<h1>{"hello Miya"}</h1>} // can pass a jsx
          />
        );
      })}
    </div>
  );
};

export default Cart;
