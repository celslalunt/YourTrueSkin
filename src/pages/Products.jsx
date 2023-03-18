import React from "react";
import Productlist from "../product.json";
import { Card, Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { update } from "../features/productSlice";
// import { useState } from "react";

function Products() {
  //   const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const updateCart = (param) => {
    // setCount((previousCount) => previousCount++);
    console.log(param);
    let cart = {
      id: param.id,
      productName: param.productName,
      productImage: param.productImage,
      price: param.price,
      // qty: count,
    };
    let method = "ADD";

    dispatch(update({ cart, method }));
  };

  const productcard = Productlist.map((product) => {
    return (
      <Col md={3} className="mb-4">
        <Card style={{ width: "260px" }} className="card-product">
          <Card.Img
            variant="top"
            src={product.productImage}
            className="product-card-img"
          />
          <Card.Body className="card-info">
            <Card.Title>
              <b>{product.productName}</b>
            </Card.Title>
            <Card.Text>Rp.{product.price}.-</Card.Text>
            <button
              className="btn card-button"
              onClick={() => updateCart(product)}
            >
              Add to Cart
            </button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return (
    <div class="container d-flex mt-4">
      <div class="row">{productcard}</div>
    </div>
  );
}

export default Products;
