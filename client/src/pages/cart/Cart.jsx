import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Content } from "../../layout";
import {
  Container,
  Table,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseCartProduct,
  decreaseCartProduct,
  removeCartProduct,
  setProductAmount,
} from "../../features/cart/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Cart = () => {
  const { items, amount, totalAmount, totalPrice } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const renderedRows = Object.values(items).map((item, index) => (
    <tr key={item._id}>
      <td>{index + 1}</td>
      <td>
        <img src={item.img} alt={item.name} className={styles["product-img"]} />
      </td>
      <td>
        <Link to={`/products/${item._id}`} className="text-primary">
          {item.name}
        </Link>
      </td>
      <td>${item.price}</td>
      <td>
        <div className="d-flex gap-2 align-items-center">
          <Button
            onClick={() =>
              dispatch(decreaseCartProduct({ productId: item._id }))
            }
            className={styles["num-btn"]}
          >
            -
          </Button>
          {/* <span>{item.amount}</span> */}
          <input
            type="text"
            id="amount"
            className="w-25"
            value={item.amount}
            onChange={(e) =>
              dispatch(
                setProductAmount({ productId: item._id, value: e.target.value })
              )
            }
            onBlur={(e) => {
              if (e.target.value == 0) {
                dispatch(removeCartProduct({ productId: item._id }));
              }
            }}
          />
          <Button
            onClick={() =>
              dispatch(increaseCartProduct({ productId: item._id }))
            }
            className={styles["num-btn"]}
          >
            +
          </Button>
        </div>
      </td>
      <td>
        <Button
          onClick={() => dispatch(removeCartProduct({ productId: item._id }))}
          className={styles["del-btn"]}
        >
          delete
        </Button>
      </td>
    </tr>
  ));
  return (
    <Content>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <Container>
        <Row className="gx-5 gy-4">
          <Col xs={12} lg={8}>
            {amount ? (
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>image</th>
                    <th>name</th>
                    <th>price</th>
                    <th>amount</th>
                    <th>actions</th>
                  </tr>
                </thead>
                <tbody>{renderedRows}</tbody>
              </Table>
            ) : (
              <>
                <p>No products in your cart</p>
                <Link to="/" className="text-primary">
                  Go to home page
                </Link>
              </>
            )}
          </Col>
          <Col xs={12} lg={4}>
            <ListGroup>
              <ListGroupItem>Total products: {totalAmount}</ListGroupItem>
              <ListGroupItem>Total price: ${totalPrice}</ListGroupItem>
              <ListGroupItem>
                <Button
                  onClick={() => navigate("/signin?redirect=shipping")}
                  className={`${styles["order-btn"]} ${
                    !totalAmount ? "bg-secondary" : ""
                  }`}
                  disabled={!totalAmount}
                >
                  order
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Content>
  );
};

export default Cart;
