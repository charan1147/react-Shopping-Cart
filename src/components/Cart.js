import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cart.css";

function Cart({ cartItems, removeFromCart }) {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="cart">
     
      <form className="d-flex">
        <button className="btn btn-outline-dark" type="button" onClick={toggleCart}>
          <i className="bi-cart-fill me-1"></i>
          Cart
          <span className="badge bg-dark text-white ms-1 rounded-pill">
            {cartItems.length}
          </span>
        </button>
      </form>


      {showCart && (
        <div className="cart-details">
          <h2>Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm">
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
