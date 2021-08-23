import React from "react";

class CartItems extends React.Component {
  // deffining the state here
  // constructor() {
  //   super();
  //   this.state = {
  //     title: "Mobile Phone",
  //     price: 999,
  //     qty: 1,
  //     img: "",
  //   };
  //calling testing() - promise
  // this.testing();
  //just add this code if you are not using an arrow function
  // this.handleIncrease = this.handleIncrease.bind(this);
  // }

  // handleIncrease = () => {
  // console.log((this.state.qty += 1)); ///but not rendering my state in the ui
  // using setState we can re-render my component
  // 1st form setState({}) passing an object which we want to change the property
  // this.setState({
  //   //   qty: this.state.qty + 1,
  //   title: "some new title",
  // });
  // 2nd form setState(callfunct) passing a call back with return
  // this.setState(
  //   (prevState) => {
  //     // it is used when we want a prev state
  //       return {
  //         qty: prevState.qty + 1,
  //       };
  //     },
  //     () => {
  //       console.log(this.state); // passing a second argument as a callback function then it will updated
  //     }
  //   );
  //   this.setState((prevState) => {
  //     // it is used when we want a prev state
  //     return {
  //       qty: prevState.qty + 1,
  //     };
  //   });
  //   this.setState((prevState) => {
  //     // it is used when we want a prev state
  //     return {
  //       qty: prevState.qty + 1,
  //     };
  //   });
  //   here batching is performed - only render once
  //   console.log(this.state); // asynchronouse is happening
  // };

  // handleDecrement = () => {
  //   const { qty } = this.state;
  //   if (qty === 0) {
  //     return;
  //   }

  //   this.setState(
  //     (prevState) => {
  //       return {
  //         // qty: prevState.qty === 0 ? "0" : prevState.qty - 1,
  //         qty: prevState.qty - 1,
  //       };
  //     },
  //     () => {
  //       console.log(this.state); // calling second argument as a callback to up to date my state
  //     }
  //   );
  // };

  //fetching - Promise - will fix soon in upcoming react
  //   testing() {
  //     //setState acts like a synchronous call
  //     const promise = new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve("done");
  //       }, 5000);
  //     });

  //     promise.then(() => {
  //       this.setState({ qty: this.state.qty + 10 });
  //       this.setState({ qty: this.state.qty + 10 });
  //       this.setState({ qty: this.state.qty + 10 });

  //       console.log(this.state);
  //     });
  // }

  render() {
    console.log("render");
    console.log(this.props);
    //   destructuring
    // const { title, price, qty } = this.props.product;
    const { title, price, qty } = this.props.product;
    return (
      <div className="cart-item">
        {/* {this.props.jsx} */}
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs. {price}</div>
          <div style={{ color: "#777" }}>Qnty: {qty}</div>
          <div className="cart-item-actions">
            {/* buttons */}
            <img
              className="action-icons"
              src="https://image.flaticon.com/icons/png/512/1828/1828919.png"
              alt="increase"
              onClick={() => this.props.handleIncrease(this.props.product)}
            />
            <img
              className="action-icons"
              src="https://image.flaticon.com/icons/png/512/992/992683.png"
              alt="decrease"
              onClick={() => this.props.handleDecrease(this.props.product)}
            />
            <img
              className="action-icons"
              src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
              alt="Delete"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "#777",
  },
};
export default CartItems;
