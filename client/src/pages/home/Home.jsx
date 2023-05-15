import React, { useEffect, useReducer } from "react";
import styles from "./styles.module.scss";
import { Content } from "../../layout";
import axios from "axios";
import { Product } from "../../components";
import { Container, Row } from "react-bootstrap";

const initialState = {
  products: [],
  error: "",
  loading: true,
};

const PRODUCTS_FETCHED = "PRODUCTS_FETCHED";
const FETCH_ERROR = "FETCH_ERROR";

const productsReducer = (state, action) => {
  switch (action.type) {
    case PRODUCTS_FETCHED:
      return { ...state, products: action.payload, loading: false };

    case FETCH_ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

const Home = () => {
  // const [products, setProducts] = useState([]);
  const [{ products, error, loading }, dispatch] = useReducer(
    productsReducer,
    initialState
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios("/api/v1/products");
        dispatch({ type: PRODUCTS_FETCHED, payload: data.products });
      } catch (error) {
        dispatch({ type: FETCH_ERROR, payload: error });
      }
    };

    fetchProducts();
  }, []);

  let renderedProducts = [];
  if (products.length) {
    renderedProducts = products.map((product) => (
      <Product key={product._id} {...product} />
    ));
  }

  return (
    <Content className={styles.home}>
      <section>
        <Container>
          <h2 className={styles.title}>featured</h2>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : renderedProducts.length ? (
            <Row>{renderedProducts}</Row>
          ) : (
            <p>No products to show</p>
          )}
        </Container>
      </section>
    </Content>
  );
};

export default Home;
