import React from "react";
import styles from "./styles.module.scss";
import { Content } from "../../layout";
import {
  Button,
  Container,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

import { ErrorMessage, useFormik } from "formik";

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log({ values });
    },

    validate: (values) => {
      const errors = {};

      //  Username
      if (values.username === "") {
        errors.username = "Username must be provided";
      }

      //  Password
      if (values.password === "") {
        errors.password = "Password must be provided";
      }

      return errors;
    },
  });
  return (
    <Content>
      <Container>
        <Form className={styles["form"]} onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FormLabel htmlFor="username">Username</FormLabel>
            <FormControl
              type="text"
              id="username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username && (
              <p className={styles["error-msg"]}>{formik.errors.username}</p>
            )}
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormControl
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p className={styles["error-msg"]}>{formik.errors.password}</p>
            )}
          </FormGroup>
          <FormGroup>
            <FormCheck
              type="checkbox"
              id="remember"
              name="remember"
              label="Remember me"
            />
          </FormGroup>
          <Button type="submit" className={styles["submit-btn"]}>
            sign in
          </Button>
        </Form>
      </Container>
    </Content>
  );
};

export default SignIn;
