import React from "react";
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
} from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, amount, totalAmount, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const renderedRows = Object.values(items).map((item, index) => (
    <tr key={item._id}>
      <td>{index + 1}</td>
      <td>
        <img src={item.img} alt={item.name} className={styles["product-img"]} />
      </td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>
        <Button
          onClick={() => dispatch(decreaseCartProduct({ productId: item._id }))}
        >
          -
        </Button>
        <span>{item.amount}</span>
        <Button
          onClick={() => dispatch(increaseCartProduct({ productId: item._id }))}
        >
          +
        </Button>
      </td>
      <td>
        <Button
          onClick={() => dispatch(removeCartProduct({ productId: item._id }))}
        >
          delete
        </Button>
      </td>
    </tr>
  ));
  return (
    <Content>
      <Container>
        <Row className="gx-5">
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
                <Button>order</Button>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Content>
  );
};

export default Cart;
