import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../../common/rating/Rating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCartProduct } from "../../../features/cart/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product }) => {
  const {
    _id: productId,
    name,
    company,
    img,
    description,
    rating,
    numReviews,
    price,
    numInStock,
  } = product;

  const { items } = useSelector((state) => state.cart);
  const cartProduct = items[productId];

  const dispatch = useDispatch();
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="gy-4">
      <Card className={styles.card}>
        <span
          className={`${styles["stock-sign"]} bg-${
            numInStock ? "success" : "danger"
          }`}
        >
          {numInStock ? "in stock" : "out stock"}
        </span>
        <Link to={`/products/${productId}`}>
          <Card.Img src={img} alt={name} />
        </Link>
        <Card.Body className={styles["card-body"]}>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{company}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          <Rating rating={rating} numReviews={numReviews} />
        </Card.Body>
        <Card.Footer className={styles["card-footer"]}>
          <Button
            type="button"
            variant="primary"
            className={`${styles["card-btn"]} ${
              cartProduct ? styles["remove"] : styles["add"]
            }`}
            onClick={() => {
              if (cartProduct) {
                dispatch(removeCartProduct({ productId }));
              } else {
                dispatch(addToCart(product));
              }
            }}
            disabled={!numInStock && true}
          >
            {cartProduct ? "remove from cart" : "add to cart"}
          </Button>
          <span>${price}</span>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Product;
