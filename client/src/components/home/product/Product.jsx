import React from "react";
import styles from "./styles.module.scss";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../../common/rating/Rating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";

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
            className={styles["card-btn"]}
            onClick={() => dispatch(addToCart(product))}
          >
            add to cart
          </Button>
          <span>${price}</span>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Product;
