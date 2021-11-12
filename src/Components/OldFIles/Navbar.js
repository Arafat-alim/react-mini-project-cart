import React from "react";

//we dont have any states, thats why we converted this into the functional based

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img
          style={styles.cartIcon}
          src="https://img-premium.flaticon.com/png/512/2543/premium/2543369.png?token=exp=1629747594~hmac=ac24a40a54f896596b1e32adff94b90d"
          alt="cart-icon"
        />
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
};

// styles
const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
    color: "#fff",
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "relative",
  },
  cartCount: {
    background: "yellow",
    fontSize: 16,
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 0,
    top: -9,
  },
};

export default Navbar;
