import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllFromCart, removeFromCart, updateToCart, userCheckout, userCheckoutCleared } from "../actions";
import { Link, useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";
import Checkout from "./Checkout";
const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const isAuthenticated = useSelector((state) => state.cartReducer.isAuthenticated);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleIncrement = (productId) => {
    const updatedQuantity =
      cartItems.find((item) => item.id === productId).quantity + 1;
    dispatch(updateToCart(productId, updatedQuantity));
  };

  const handleDecrement = (productId) => {
    const currentQuantity = cartItems.find(
      (item) => item.id === productId
    ).quantity;
    const updatedQuantity = currentQuantity > 1 ? currentQuantity - 1 : 1;
    dispatch(updateToCart(productId, updatedQuantity));
  };

  const handleRemoveProduct = (productId) => {
    dispatch(removeFromCart(productId));
    console.log(productId, "sssssssssssssssssss");
  };

  const calculateTotalAmount = () => {
    const totalAmount = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  
    return totalAmount.toFixed(2);
  };

  const handleCheckout=()=>{
    
    if (isAuthenticated){
      navigate("/Checkout",{replace:true})
      dispatch(userCheckoutCleared())
      dispatch(removeAllFromCart());
    }
    else{
      navigate("/Contact",{replace:true})
      dispatch(userCheckout())
      dispatch(removeAllFromCart());
    }
  }
  return (
    <>
      {cartItems.length === 0 ? (
        <>
          <div style={{ textAlign: "center" }}>
            <img
              src="https://i.ibb.co/DwzsS5T/cart.png"
              style={{
                height: 300,
                width: 400,
                display: "block",
                margin: "auto",
                marginTop: "80px",
              }}
            />
            <br />
            <Link to="/Products" className="btn btn-outline-danger">
                Add Products
            </Link>
          </div>
        </>
      ) : (
        <div>
          <h2 className="m-3">Cart Items:</h2>
          <div className="row m-1">
            {cartItems.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card text-center mb-4">
                  <img
                    src={item.image}
                    className="card-img-top mx-auto mt-3"
                    alt={item.title}
                    style={{ height: 125, width: 100 }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    
                    <p className="card-text">
                       Total: $ {item.price}{/*{item.price * item.quantity} */}
                    </p>
                    <div className="btn-group mt-2">
                      <button
                        type="button"
                        className="btn btn-success rounded"
                        onClick={() => handleIncrement(item.id)}
                        style={{ marginRight: "8px" }}
                      >
                        +
                      </button>
                      <span style={{ marginRight: "8px", fontWeight: 500 }}>
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="btn btn-danger rounded"
                        onClick={() => handleDecrement(item.id)}
                        style={{ marginRight: "8px" }}
                      >
                        -
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary rounded"
                        onClick={() => handleRemoveProduct(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-center">Total Amount: ${calculateTotalAmount()}</h4>
        </div>
      )}
      <div class="container text-center mt-4">
  <div class="row">
    <div class="col-md-6">
      <NavLink to="/Products" class="btn btn-primary btn-lg btn-block">
        Continue Shopping
      </NavLink>
    </div>
    <div class="col-md-6">
      <button class="btn btn-danger btn-lg btn-block" onClick={handleCheckout} >
        Place Order
      </button>
    </div>
  </div>
</div>

    </>
  );
};

export default Cart;