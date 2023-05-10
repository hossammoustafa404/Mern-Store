import React from "react";
import styles from "./styles.module.scss";
import { Content } from "../../layout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Content className={styles.home}>
      <Link to="/products/5">Go to product details page</Link>
    </Content>
  );
};

export default Home;
