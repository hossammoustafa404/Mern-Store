import React from "react";
import styles from "./styles.module.scss";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../../common/rating/Rating";

const Product = ({
  _id: productId,
  name,
  company,
  img,
  description,
  rating,
  numReviews,
}) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="gy-4">
      <Card className={styles.card}>
        <Link to={`/products/${productId}`}>
          <Card.Img src={img} alt={name} />
        </Link>
        <Card.Body className={styles["card-body"]}>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{company}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          <Rating rating={rating} numReviews={numReviews} />
          <Button
            type="button"
            variant="primary"
            className={styles["card-btn"]}
          >
            add to cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
