import React, { useEffect, useReducer } from "react";
import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Content } from "../../layout";
import {
  Badge,
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { Rating } from "../../components";
import { addToCart, removeCartProduct } from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  product: {},
  error: "",
  loading: true,
};

const PRODUCT_FETCHED = "PRODUCT_FETCHED";
const FETCH_ERROR = "FETCH_ERROR";

const productReducer = (state, action) => {
  switch (action.type) {
    case PRODUCT_FETCHED:
      return { ...state, product: action.payload, loading: false };

    case FETCH_ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

// Component
const ProductDetails = () => {
  const { productId } = useParams();
  const [{ product, error, loading }, dispatch] = useReducer(
    productReducer,
    initialState
  );
  const { items } = useSelector((state) => state.cart);
  const cartProduct = items[product._id];
  const reduxDispatch = useDispatch();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const { data } = await axios(`/api/v1/products/${productId}`);
        dispatch({ type: PRODUCT_FETCHED, payload: data.product });
      } catch (error) {
        dispatch({ type: FETCH_ERROR, payload: error });
      }
    };

    fetchSingleProduct();
  }, []);

  console.log(product);
  return (
    <Content>
      <section>
        <Container>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <Row className="gy-4">
              <Col xs={12} lg={6}>
                {/* <img src={product.img} alt={product.name} /> */}
                <img src="../../imgs/shoes.jpg" alt={product.name} />
              </Col>

              <Col xs={12} md={6} lg={3}>
                <ListGroup>
                  <ListGroupItem>{product.name}</ListGroupItem>
                  <ListGroupItem>
                    <Rating
                      rating={product.rating}
                      numReviews={product.numReviews}
                    />
                  </ListGroupItem>
                  <ListGroupItem>Price: ${product.price}</ListGroupItem>
                  <ListGroupItem>
                    Description: {product.description}
                  </ListGroupItem>
                </ListGroup>
              </Col>

              <Col xs={12} md={6} lg={3}>
                <ListGroup>
                  <ListGroupItem>Price: ${product.price}</ListGroupItem>
                  <ListGroupItem>
                    Status:{" "}
                    {product.numInStock ? (
                      <Badge bg="success">in stock</Badge>
                    ) : (
                      <Badge bg="danger">out of stock</Badge>
                    )}
                  </ListGroupItem>
                  <ListGroupItem className="text-center">
                    <Button
                      className={`${styles["btn"]} ${
                        cartProduct ? styles["remove"] : styles["add"]
                      }`}
                      onClick={() => {
                        if (cartProduct) {
                          reduxDispatch(
                            removeCartProduct({ productId: product._id })
                          );
                        } else {
                          reduxDispatch(addToCart(product));
                        }
                      }}
                    >
                      {cartProduct ? "Remove from cart" : "add to cart"}
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </Content>
  );
};

export default ProductDetails;
