import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { update } from "../features/productSlice";

function Cart() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [p_cart, setP_cart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state.product);

  const incrementItems = (param) => {
    setCount(count + 1);
    let cart = {
      id: param.id,
      productName: param.productName,
      productImage: param.productImage,
      price: param.price,
      totalPrice: 0,
      qty: count,
    };

    let method = "INCREMENT";
    dispatch(update({ cart, method }));
  };

  const decrementItems = (param) => {
    setCount(count - 1);
    let cart = {
      id: param.id,
      productName: param.productName,
      productImage: param.productImage,
      price: param.price,
      totalPrice: 0,
      qty: count,
    };

    let method = "DECREMENT";
    dispatch(update({ cart, method }));
  };

  const deleteCart = (param) => {
    // console.log(param);
    let cart = {
      id: param.id,
      productName: param.productName,
      productImage: param.productImage,
      price: param.price,
    };
    let method = "DELETE";
    dispatch(update({ cart, method }));
  };

  useEffect(() => {
    setP_cart(cart);
    // Calculate total cart value
    const total = cart.reduce((accumulator, item) => {
      const itemPrice = item.price || 0;
      const itemQty = item.qty || 1;
      return accumulator + itemPrice * itemQty;
    }, 0);
    setTotalCart(total);
  }, [cart]);

  return (
    <div className="cart-bg">
      <div className="text-center mt-4">
        <h1 className="cart-title">Cart</h1>
      </div>
      {p_cart.length === 0 ? (
        <div className="text-center mt-4">Your cart is empty</div>
      ) : (
        p_cart.map((wishlist) => (
          <div className="container-fluid cart-card mt-2 p-0" key={wishlist.id}>
            <div className="card-body d-flex justify-content-between align-items-center">
              <div className="d-flex gap-3 align-items-center">
                <img
                  className="cart-img mr-3"
                  src={wishlist.productImage}
                  alt=""
                  style={{ width: "62px", height: "62px" }}
                />

                <div className="d-flex flex-column">
                  <span className="fs-6 fw-normal">
                    <b>{wishlist.productName}</b>
                  </span>
                  <span className="fs-6 fw-light">
                    Rp. {wishlist.price}.- /Pcs
                  </span>
                  <button
                    className="btn btn-sm btn-delete"
                    onClick={() => deleteCart(wishlist)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                    <span className="ml-2">
                      <b>Delete</b>
                    </span>
                  </button>
                </div>
              </div>
              <span className="fs-6 fw-light">
                <b>
                  Total Price: Rp.{" "}
                  {wishlist.totalPrice === undefined
                    ? wishlist.price
                    : wishlist.totalPrice}
                  .-
                </b>
              </span>
              <div className="d-flex align-items-center flex-column">
                <button
                  className="btn btn-sm btn-plus"
                  onClick={() => incrementItems(wishlist)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </button>
                <span>{wishlist.qty === undefined ? 1 : wishlist.qty}</span>
                <button
                  className="btn btn-sm btn-minus"
                  onClick={() => decrementItems(wishlist)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-dash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="card-body d-flex cart-total-container mt-5 text-center">
        <b>Your Cart Total is : Rp. {totalCart}</b>
      </div>
    </div>
  );
}

export default Cart;
