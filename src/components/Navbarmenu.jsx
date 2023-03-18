import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { Popover, OverlayTrigger } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Navbarmenu() {
  const [p_counter, setCounter] = useState(0);
  const { counter } = useSelector((state) => state.product);
  const [p_cart, setP_cart] = useState([]);
  const { cart } = useSelector((state) => state.product);

  useEffect(() => {
    setCounter(counter);
  }, [counter]);

  useEffect(() => {
    setP_cart(cart);
  }, [cart]);

  const shortCart = p_cart.map((wishlist) => (
    <div className="container-fluid shortcart-card p-0 mt-2" key={wishlist.id}>
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            className="cart-img mr-3 shortcart-img"
            src={wishlist.productImage}
            alt=""
            style={{ width: "70px", height: "70px" }}
          />
          <div className="d-flex flex-column">
            <span className="fs-6 fw-normal">
              <b>{wishlist.productName}</b>
            </span>
          </div>
        </div>
        <span className="fs-6 fw-light"></span>
      </div>
    </div>
  ));

  const popoverClick = (
    <Popover title="Popover bottom">
      <div className="container p-2">
        <div className="text-center shortcart-title">
          <b>Your Cart</b>
        </div>
        <Link to="/cart">
          <b>See details</b>
        </Link>
        <div>{shortCart}</div>
      </div>
    </Popover>
  );

  return (
    <div>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Link to="/">
            <Navbar.Brand>Your True Skin</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/cart">Cart</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/newarrivals">New Arrivals!</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/admin">Admin</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popoverClick}
            >
              <span className="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-cart4"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
                <span className="badge badge-pill badge-danger">
                  {p_counter}
                </span>
              </span>
            </OverlayTrigger>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarmenu;
