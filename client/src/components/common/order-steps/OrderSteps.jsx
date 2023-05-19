import React from "react";
import styles from "./styles.module.scss";
import { Col, Row } from "react-bootstrap";

const OrderSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Row
      className={styles["row"]}
    >
      <Col className={`${styles["step"]} ${step1 ? styles["active"] : ""}`}>
        Sign in
      </Col>
      <Col className={`${styles["step"]} ${step2 ? styles["active"] : ""}`}>
        Shipping
      </Col>
      <Col className={`${styles["step"]} ${step3 ? styles["active"] : ""}`}>
        Payment
      </Col>
      <Col className={`${styles["step"]} ${step4 ? styles["active"] : ""}`}>
        Place Order
      </Col>
    </Row>
  );
};

export default OrderSteps;
