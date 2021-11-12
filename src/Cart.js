import React from "react";
import CartItem from "./Components/CartItem";

class Cart extends React.Component {
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
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((item) => {
          return (
            <CartItem
              qty={item.qty}
              title={item.title}
              price={item.price}
              imgSrc={item.imgSrc}
              key={item.id.toString()}
              isLogged={true}
              comp={<CartItem />}
              func={() => console.log("hello")}
              jsx={<h1>JSX hai Apun</h1>}
              item={item}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
