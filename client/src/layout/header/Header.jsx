import React from "react";
import styles from "./styles.module.scss";
import { Badge, Container, Navbar, NavbarBrand } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <Navbar className={styles["navbar"]}>
      <Container>
        <div className={styles["toolbar"]}>
          <NavbarBrand className={styles["brand"]}>amazon</NavbarBrand>
          <Link to="/cart" className={styles["cart-link"]}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className={styles["cart-icon"]}
            />
            <Badge className={styles["cart-badge"]}>{amount}</Badge>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
