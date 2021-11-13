import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart">
      {products.map((item) => {
        return products.length !== 0 ? (
          <CartItem
            key={item.id.toString()}
            item={item}
            onIncreaseHandle={props.onIncreaseHandle}
            onDecreaseHandle={props.onDecreaseHandle}
            onDelete={props.onDelete}
          />
        ) : (
          <div>
            <h1>Show Me Boss</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
