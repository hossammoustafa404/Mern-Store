import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  Badge,
  Button,
  Container,
  NavDropdown,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../features/user/userSlice";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { amount } = useSelector((state) => state.cart);
  const {
    info: { firstName },
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  return (
    <Navbar className={styles["navbar"]}>
      <Container>
        <div className={styles["toolbar"]}>
          <Link to="/">
            <NavbarBrand className={styles["brand"]}>amazon</NavbarBrand>
          </Link>
          <Link to="/cart" className={styles["cart-link"]}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className={styles["cart-icon"]}
            />
            <Badge className={styles["cart-badge"]}>{amount}</Badge>
          </Link>
          {firstName ? (
            <NavDropdown title={firstName} className="text-white ms-5 mb-0">
              <NavDropdown.Item
                className="w-fit"
                href="/"
                onClick={() => dispatch(userLogout())}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Button
              className="ms-4"
              onClick={() => navigate(`/signin?redirect=${pathname}`)}
            >
              login
            </Button>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
