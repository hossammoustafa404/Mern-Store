import React from "react";
import styles from "./styles.module.scss";

const Content = ({ children, className }) => {
  return <main className={`${styles.content} ${className}`}>{children}</main>;
};

export default Content;
