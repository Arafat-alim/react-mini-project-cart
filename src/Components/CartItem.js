import React from "react";

const CartItem = (props) => {
  const { title, price, qty, imgSrc } = props.item;
  const { onDecreaseHandle, onDelete, onIncreaseHandle, item } = props;
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
              onClick={() => onIncreaseHandle(item)}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              alt="decrease"
              className="action-icons"
              onClick={() => onDecreaseHandle(item)}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
              alt="delete"
              className="action-icons"
              onClick={() => onDelete(item.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
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
