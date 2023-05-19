import React, { useEffect } from "react";
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

import { replace, useFormik } from "formik";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSign } from "../../features/user/userSlice";
import { Helmet } from "react-helmet-async";
import { OrderSteps } from "../../components";

const SignIn = () => {
  const { search } = useLocation();
  const redirect = new URLSearchParams(search).get("redirect") || "/";
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  useEffect(() => {
    if (token) {
      navigate(`/${redirect}`, { replace: true });
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      remember: false,
    },

    onSubmit: async (values) => {
      try {
        const {
          data: { token, info },
        } = await axios.get("/api/v1/auth", {
          params: { username: values.username, password: values.password },
        });
        dispatch(userSign({ token, info, rememberMe: values.remember }));
        navigate(`/${redirect}`, { replace: true });
      } catch (error) {
        console.log(error);
      }
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
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <Container>
        {redirect === "shipping" && <OrderSteps step1 />}
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
              value={formik.values.remember}
              onChange={formik.handleChange}
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
