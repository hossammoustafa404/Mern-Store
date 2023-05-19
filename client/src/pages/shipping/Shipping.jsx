import React from "react";
import styles from "./styles.module.scss";
import { Content } from "../../layout";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { OrderSteps } from "../../components";
import { useFormik } from "formik";
const Shipping = () => {
  const formik = useFormik({
    initialValues: {
      "full-name": "",
      address: "",
      city: "",
      "postal-code": "",
      country: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Content>
      <Helmet>
        <title>Shipping</title>
      </Helmet>
      <Container>
        <OrderSteps step1 step2 />
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FormLabel htmlFor="full-name">full name</FormLabel>
            <FormControl
              type="text"
              name="full-name"
              id="full-name"
              value={formik.values["full-name"]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="address">address</FormLabel>
            <FormControl
              type="text"
              name="address"
              id="address"
              value={formik.values["address"]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="city">city</FormLabel>
            <FormControl
              type="text"
              name="city"
              id="city"
              value={formik.values["city"]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="postal-code">postal code</FormLabel>
            <FormControl
              type="text"
              name="postal-code"
              id="postal-code"
              value={formik.values["postal-code"]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="country">country</FormLabel>
            <FormControl
              type="text"
              name="country"
              id="country"
              value={formik.values["country"]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FormGroup>

          <Button type="submit" className={styles["submit-btn"]}>
            continue
          </Button>
        </Form>
      </Container>
    </Content>
  );
};

export default Shipping;
