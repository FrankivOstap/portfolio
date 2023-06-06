import React, { FC, useEffect, useState } from "react";
import styles from "./Footer.module.css";

type Props = {};

export const Footer: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Kostyantyn Dyachenko Developer</h2>
      <div className={styles.nav}>
        <span>About Us</span>
        <span>University</span>
        <span>Our Services</span>
      </div>
      <div className={styles.nav}>
        <span>Our Approach</span>
        <span>Recent Project</span>
        <span>Contact us</span>
      </div>
    </div>
  );
};
