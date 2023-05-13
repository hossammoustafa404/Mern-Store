import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Content } from "../../layout";
import { Link } from "react-router-dom";
import axios from "axios";
import { Product } from "../../components";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios("./dummyData.json");
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  const renderedProducts = products.map((product) => (
    <Product key={product.id} {...product} />
  ));
  return (
    <Content className={styles.home}>
      <section>
        <Container>
          <h2 className={styles.title}>featured</h2>
          <Row>{renderedProducts}</Row>
        </Container>
      </section>
    </Content>
  );
};

export default Home;
